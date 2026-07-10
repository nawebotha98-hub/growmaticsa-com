# Lead tracker

Business-development tracker for GrowMatic SA outreach in Gqeberha / Eastern Cape.

- `tracker.csv` — one row per prospect: contact info, AI automation opportunities, and outreach status.
- `drafts/` — full text of the drafted outreach email for each prospect, one file per company (`<slug>.md`).

## Status values

- `researched` — info gathered, email drafted, not yet approved.
- `approved` — Ewan approved the draft; ready to send (Gmail draft created where a verified general email exists).
- `sent` — email sent / WhatsApp message sent.
- `replied` — prospect responded; see notes for follow-up.
- `no_contact_found` — no verifiable general email; use the website contact form instead.
- `declined` / `unsubscribed` — do not contact again.

## Rules this list follows

- Only publicly listed general/business contact info — no personal emails, no bypassing access controls.
- No entry is marked `sent` unless Ewan explicitly approved it first.
- Before adding a company to a new batch, check `tracker.csv` to avoid duplicates.
