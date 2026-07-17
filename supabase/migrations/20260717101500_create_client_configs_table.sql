-- Durable backup store for the agency's per-client backend configs.
--
-- The Railway backend keeps each client's config + knowledge base as files on
-- its own disk (fast, and the source of truth at runtime). This table is the
-- off-box backup: the backend mirrors every config here on write and restores
-- from here on boot if its local dir comes up empty after a redeploy. See
-- growmatic-sa-backend/backend/src/clients.js.
create table public.client_configs (
  client_id text primary key,
  config jsonb not null,
  knowledge_base text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.client_configs enable row level security;

-- No anon policies: this is private agency data reached only server-to-server
-- through the `admin-data` edge function (service_role, which bypasses RLS).
-- Same locked-down pattern as bookings / conversations / kb_documents — the
-- public anon key can neither read nor write it.
