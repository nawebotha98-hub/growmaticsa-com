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

    return json(
      {
        error:
          "unsupported route — use ?resource=leads|whatsapp_clicks|content|conversations|kb_documents|bookings",
      },
      400,
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return json({ error: message }, 500);
  }
});
