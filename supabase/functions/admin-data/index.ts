// Admin data API for the private Railway portal.
// Called server-to-server; auth is a shared secret in the `x-portal-secret` header.
import { createClient } from "npm:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ADMIN_PORTAL_SECRET = Deno.env.get("ADMIN_PORTAL_SECRET")!;

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

Deno.serve(async (req) => {
  try {
    if (req.headers.get("x-portal-secret") !== ADMIN_PORTAL_SECRET) {
      return json({ error: "unauthorized" }, 401);
    }

    const url = new URL(req.url);
    const resource = url.searchParams.get("resource");
    const section = url.searchParams.get("section");
    const method = req.method.toUpperCase();

    if (method === "GET" && resource === "leads") {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return json({ data });
    }

    if (method === "GET" && resource === "whatsapp_clicks") {
      const { data, error } = await supabase
        .from("whatsapp_clicks")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return json({ data });
    }

    if (method === "GET" && resource === "content") {
      if (section) {
        const { data, error } = await supabase
          .from("site_content")
          .select("*")
          .eq("section", section)
          .maybeSingle();
        if (error) throw error;
        if (!data) return json({ error: "not_found" }, 404);
        return json({ data });
      }
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("section", { ascending: true });
      if (error) throw error;
      return json({ data });
    }

    if (method === "PUT" && resource === "content") {
      if (!section) return json({ error: "section query param required" }, 400);
      let body: { content?: unknown };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (body.content === undefined) {
        return json({ error: "body must include `content`" }, 400);
      }
      const { data, error } = await supabase
        .from("site_content")
        .upsert(
          { section, content: body.content, updated_at: new Date().toISOString() },
          { onConflict: "section" },
        )
        .select()
        .single();
      if (error) throw error;
      return json({ data });
    }

    // ---------- conversations ----------
    if (method === "GET" && resource === "conversations") {
      if (section) {
        const { data: conversation, error: cErr } = await supabase
          .from("conversations")
          .select("*")
          .eq("id", section)
          .maybeSingle();
        if (cErr) throw cErr;
        if (!conversation) return json({ error: "not_found" }, 404);
        const { data: messages, error: mErr } = await supabase
          .from("messages")
          .select("*")
          .eq("conversation_id", section)
          .order("created_at", { ascending: true });
        if (mErr) throw mErr;
        return json({ conversation, messages });
      }
      const { data, error } = await supabase
        .from("conversations")
        .select("*")
        .order("last_message_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return json({ data });
    }

    // Writes for the public-facing site chat, called server-to-server from
    // the backend (never directly from the browser) — routed through this
    // function's service_role client rather than the anon key + RLS path,
    // which was rejecting inserts for reasons that didn't resolve even with
    // provably-correct policies. Same shared-secret auth as every other
    // route above.
    if (method === "POST" && resource === "conversations") {
      let body: { session_id?: string; channel?: string };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.session_id) return json({ error: "body must include `session_id`" }, 400);
      const { data, error } = await supabase
        .from("conversations")
        .insert({ session_id: body.session_id, channel: body.channel ?? "website" })
        .select()
        .single();
      if (error) throw error;
      return json({ data });
    }

    if (method === "PATCH" && resource === "conversations") {
      if (!section) return json({ error: "section query param required" }, 400);
      let body: Record<string, unknown>;
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      const { data, error } = await supabase
        .from("conversations")
        .update(body)
        .eq("id", section)
        .select()
        .maybeSingle();
      if (error) throw error;
      return json({ data });
    }

    if (method === "POST" && resource === "messages") {
      let body: { conversation_id?: string; role?: string; content?: string };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.conversation_id || !body.role || !body.content) {
        return json({ error: "body must include `conversation_id`, `role`, and `content`" }, 400);
      }
      const { data, error } = await supabase
        .from("messages")
        .insert({ conversation_id: body.conversation_id, role: body.role, content: body.content })
        .select()
        .single();
      if (error) throw error;
      return json({ data });
    }

    if (method === "POST" && resource === "leads") {
      let body: Record<string, unknown>;
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.name) return json({ error: "body must include `name`" }, 400);
      const { data, error } = await supabase.from("leads").insert(body).select().single();
      if (error) throw error;
      return json({ data });
    }

    // ---------- kb_documents ----------
    if (method === "GET" && resource === "kb_documents") {
      const { data, error } = await supabase
        .from("kb_documents")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return json({ data });
    }

    if (method === "PUT" && resource === "kb_documents") {
      let body: {
        id?: string | null;
        title?: string;
        content?: string;
        source_type?: string;
      };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.title || !body.content) {
        return json({ error: "body must include `title` and `content`" }, 400);
      }
      const row: Record<string, unknown> = {
        title: body.title,
        content: body.content,
        source_type: body.source_type ?? "manual",
        updated_at: new Date().toISOString(),
      };
      if (body.id) row.id = body.id;
      const { data, error } = await supabase
        .from("kb_documents")
        .upsert(row, { onConflict: "id" })
        .select()
        .single();
      if (error) throw error;
      return json({ data });
    }

    if (method === "DELETE" && resource === "kb_documents") {
      if (!section) return json({ error: "section query param required" }, 400);
      const { error } = await supabase
        .from("kb_documents")
        .delete()
        .eq("id", section);
      if (error) throw error;
      return json({ deleted: true });
    }

    // ---------- bookings ----------
    if (method === "POST" && resource === "bookings") {
      let body: Record<string, unknown>;
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.name || !body.preferred_datetime) {
        return json({ error: "body must include `name` and `preferred_datetime`" }, 400);
      }
      const { data, error } = await supabase.from("bookings").insert(body).select().single();
      if (error) throw error;
      return json({ data });
    }

    if (method === "GET" && resource === "bookings") {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return json({ data });
    }

    if (method === "PUT" && resource === "bookings") {
      if (!section) return json({ error: "section query param required" }, 400);
      let body: { status?: string };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.status) {
        return json({ error: "body must include `status`" }, 400);
      }
      const { data, error } = await supabase
        .from("bookings")
        .update({ status: body.status })
        .eq("id", section)
        .select()
        .maybeSingle();
      if (error) throw error;
      if (!data) return json({ error: "not_found" }, 404);
      return json({ data });
    }

    // ---------- analytics ----------
    if (method === "GET" && resource === "analytics") {
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

      const countOf = async (
        table: string,
        build?: (q: ReturnType<typeof supabase.from>) => any,
      ): Promise<number> => {
        let q: any = supabase.from(table).select("*", { count: "exact", head: true });
        if (build) q = build(q);
        const { count, error } = await q;
        if (error) throw error;
        return count ?? 0;
      };

      const [
        conversationsTotal,
        convOpen,
        convQualified,
        convEscalated,
        convClosed,
        convWebsite,
        convEmail,
        messagesTotal,
        leadsTotal,
        leads7,
        leads30,
        bookingsTotal,
        bookingsPending,
        bookingsConfirmed,
        waTotal,
        wa7,
      ] = await Promise.all([
        countOf("conversations"),
        countOf("conversations", (q) => q.eq("status", "open")),
        countOf("conversations", (q) => q.eq("status", "qualified")),
        countOf("conversations", (q) => q.eq("status", "escalated")),
        countOf("conversations", (q) => q.eq("status", "closed")),
        countOf("conversations", (q) => q.eq("channel", "website")),
        countOf("conversations", (q) => q.eq("channel", "email")),
        countOf("messages"),
        countOf("leads"),
        countOf("leads", (q) => q.gte("created_at", sevenDaysAgo)),
        countOf("leads", (q) => q.gte("created_at", thirtyDaysAgo)),
        countOf("bookings"),
        countOf("bookings", (q) => q.eq("status", "pending")),
        countOf("bookings", (q) => q.eq("status", "confirmed")),
        countOf("whatsapp_clicks"),
        countOf("whatsapp_clicks", (q) => q.gte("created_at", sevenDaysAgo)),
      ]);

      const avgPerConversation =
        conversationsTotal > 0
          ? Math.round((messagesTotal / conversationsTotal) * 10) / 10
          : 0;
      const conversionRate =
        conversationsTotal > 0
          ? Math.round((leadsTotal / conversationsTotal) * 1000) / 10
          : 0;

      return json({
        conversations: {
          total: conversationsTotal,
          byStatus: {
            open: convOpen,
            qualified: convQualified,
            escalated: convEscalated,
            closed: convClosed,
          },
          byChannel: { website: convWebsite, email: convEmail },
        },
        messages: { total: messagesTotal, avgPerConversation },
        leads: { total: leadsTotal, last7days: leads7, last30days: leads30 },
        bookings: {
          total: bookingsTotal,
          pending: bookingsPending,
          confirmed: bookingsConfirmed,
        },
        whatsappClicks: { total: waTotal, last7days: wa7 },
        conversionRate,
      });
    }

    // ---------- client_configs (agency's private client backup store) ----------
    if (method === "GET" && resource === "client-configs") {
      const { data, error } = await supabase
        .from("client_configs")
        .select("*")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return json({ data });
    }

    if (method === "PUT" && resource === "client-configs") {
      let body: { client_id?: string; config?: unknown; knowledge_base?: string };
      try {
        body = await req.json();
      } catch {
        return json({ error: "invalid JSON body" }, 400);
      }
      if (!body.client_id || body.config === undefined) {
        return json({ error: "body must include `client_id` and `config`" }, 400);
      }
      const { data, error } = await supabase
        .from("client_configs")
        .upsert(
          {
            client_id: body.client_id,
            config: body.config,
            knowledge_base: body.knowledge_base ?? "",
            updated_at: new Date().toISOString(),
          },
          { onConflict: "client_id" },
        )
        .select()
        .single();
      if (error) throw error;
      return json({ data });
    }

    if (method === "DELETE" && resource === "client-configs") {
      if (!section) return json({ error: "section query param required" }, 400);
      const { error } = await supabase
        .from("client_configs")
        .delete()
        .eq("client_id", section);
      if (error) throw error;
      return json({ deleted: true });
    }

    return json(
      {
        error:
          "unsupported route — use ?resource=leads|whatsapp_clicks|content|conversations|kb_documents|bookings|client-configs|analytics",
      },
      400,
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return json({ error: message }, 500);
  }
});
