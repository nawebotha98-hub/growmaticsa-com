create table public.site_content (
  section text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- The public site reads this to render Services/Pricing/FAQ; only the
-- admin backend (using the service_role key) can write it, so there is
-- deliberately no insert/update/delete policy for anon here.
create policy "Anyone can read site content"
  on public.site_content
  for select
  to anon
  using (true);
