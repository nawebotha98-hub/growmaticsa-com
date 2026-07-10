create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text,
  phone text,
  message text,
  source text not null default 'contact_form',
  status text not null default 'new',
  constraint leads_email_or_phone_required check (email is not null or phone is not null)
);

alter table public.leads enable row level security;

-- Public contact/booking forms need to insert without being able to read
-- back other people's submissions; leads are viewed via the Supabase
-- dashboard (service role), not through the app.
create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon
  with check (true);
