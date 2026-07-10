create table public.whatsapp_clicks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  button text not null,
  whatsapp_number text not null,
  message text,
  page_path text
);

alter table public.whatsapp_clicks enable row level security;

-- Same reasoning as leads: public logs clicks, can't read others' data back.
create policy "Anyone can log a whatsapp click"
  on public.whatsapp_clicks
  for insert
  to anon
  with check (true);
