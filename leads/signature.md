# Standard email signature

Used in every outreach draft going forward (HTML version baked into each Gmail draft's `htmlBody`; plain-text version used in `body` and in the `leads/drafts/*.md` files).

## ✅ WORKING signature for API-created drafts (use this one)

Renders reliably in Gmail and for recipients because the logo is a
transparent PNG hosted on growmaticsa.com itself — **now served from the
canonical `growmatic-sa` repo root** (`email-logo-icon.png` /
`email-logo-wordmark.png`), which is what actually serves growmaticsa.com.
(The old copies lived in `growmaticsa-com/public`, which does NOT serve the
domain — that's why earlier image signatures showed blank; fixed 2026-07-17.)

**Goes live once the `growmatic-sa` change is merged to main and deploys.**
Until then the image URLs 404, so use the plain-text signature below.

Layout: the gear icon as a clean mark (left), green divider, name/contacts
(right), tagline below. Single icon — not icon+wordmark stacked — so the
brand name isn't duplicated next to "Founder | GrowMatic SA". Verified with a
rendered screenshot.

```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:#0a1f44;">
<tr>
<td style="padding-right:16px;vertical-align:middle;">
<img src="https://growmaticsa.com/email-logo-icon.png" width="74" height="74" alt="GrowMatic SA" style="display:block;">
</td>
<td style="border-left:2px solid #1f9d5c;padding-left:16px;vertical-align:middle;">
<div style="font-size:18px;font-weight:bold;color:#0a1f44;line-height:1.2;">Ewan Botha</div>
<div style="font-size:13px;color:#6b6b68;margin-top:2px;"><span style="color:#1f9d5c;font-weight:bold;">Founder</span> &nbsp;&middot;&nbsp; GrowMatic SA</div>
<div style="font-size:13px;line-height:1.85;margin-top:9px;color:#0a1f44;">
<a href="tel:+27827900255" style="color:#0a1f44;text-decoration:none;">+27 82 790 0255</a> &nbsp;&middot;&nbsp; <a href="mailto:ewan@growmaticsa.com" style="color:#0a1f44;text-decoration:none;">ewan@growmaticsa.com</a><br>
<a href="https://growmaticsa.com" style="color:#1f9d5c;text-decoration:none;font-weight:bold;">growmaticsa.com</a> &nbsp;&middot;&nbsp; <a href="https://wa.me/27827900255?text=Hi!%20I&#39;d%20like%20to%20book%20a%20free%20strategy%20call." style="color:#1f9d5c;text-decoration:none;">Book a free strategy call on WhatsApp &rarr;</a>
</div>
</td>
</tr>
<tr>
<td colspan="2" style="padding-top:13px;">
<div style="border-top:1px solid #e4e4e0;padding-top:9px;font-size:11px;letter-spacing:2.5px;color:#1f9d5c;font-weight:bold;">AUTOMATE. &nbsp;ORGANISE. &nbsp;GROW.</div>
<div style="font-size:11px;color:#6b6b68;margin-top:4px;">Custom automated systems for South African businesses &mdash; 24/7 lead response, bookings &amp; follow-ups.</div>
</td>
</tr>
</table>
```

---

## Ewan's Gmail-configured signature (reference only — does NOT work in API drafts)

This is Ewan's actual configured Gmail signature — a single hosted branded
image (logo + name + phone + email + web + tagline, all baked into the image)
followed by the WhatsApp booking link. **Any Gmail email draft created via the
API must use this exact block** so the sent email matches what Ewan sends by
hand. Pulled verbatim from a real sent message (2026-07-13).

```html
<br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4xxKWKI5-L3RyLR0AFzehvJNciQcYddJtuTddxxr9YG_lPepZgnF3Nd6pB3jCTvwoa3_tYBXVJSBuCt" width="420" height="279"></div><span style="font-family:Aptos,Aptos_EmbeddedFont,Aptos_MSFontService,Calibri,Helvetica,sans-serif;font-size:12pt;color:rgb(31,157,92)"><a href="https://wa.me/27827900255?text=Hi!%20I&#39;d%20like%20to%20book%20a%20free%20strategy%20call." style="color:rgb(31,157,92)" target="_blank"><b>Book a free strategy call on WhatsApp →</b></a></span></div></div>
```

Notes:
- ⚠️ **This hosted-image signature does NOT render in drafts created via the
  Gmail API.** The `ci3.googleusercontent.com/mail-sig/...` URL is Google's
  private cache of Ewan's signature; it renders inside his own sent mail but
  Gmail will not load it into a fresh API-created draft (the logo shows up
  blank). **Do not rely on API drafts to carry the signature.** The reliable
  way to send with the real signature is for Ewan to **compose the email in
  Gmail normally** (where his signature auto-inserts) and paste the message
  body in. This block is kept only as a record of the real signature markup.
- If the signature is ever changed in Gmail settings this URL changes — re-pull
  it from a fresh sent message.
- For **contact-form / WhatsApp** sends (no HTML/images), use the plain-text
  signature below instead — you can't paste an image into a web form.

---

## Plain text (for contact forms / WhatsApp / plain-text fallback)

```
Ewan Botha
Founder | GrowMatic SA
+27 82 790 0255
ewan@growmaticsa.com
growmaticsa.com
Book a free strategy call on WhatsApp: https://wa.me/27827900255

Custom automated systems for South African businesses — 24/7 lead response, bookings & follow-ups.
```

## HTML

```html
<table cellpadding="0" cellspacing="0" style="margin-top:6px;"><tr><td>
<div style="font-size:18px; font-weight:bold; color:#0a1f44;">Ewan Botha</div>
<div style="font-size:13px; margin-top:2px;"><span style="color:#1f9d5c; font-weight:bold;">Founder</span> <span style="color:#999;">|</span> <span style="color:#0a1f44;">GrowMatic SA</span></div>
<div style="margin-top:8px; font-size:13px;">
📞 <a href="tel:+27827900255" style="color:#0a1f44; text-decoration:none;">+27 82 790 0255</a><br>
✉️ <a href="mailto:ewan@growmaticsa.com" style="color:#0a1f44; text-decoration:none;">ewan@growmaticsa.com</a><br>
🌐 <a href="https://growmaticsa.com" style="color:#0a1f44; text-decoration:none;">growmaticsa.com</a><br>
📅 <a href="https://wa.me/27827900255" style="color:#1f9d5c; text-decoration:underline;">Book a free strategy call on WhatsApp →</a>
</div>
<div style="margin-top:10px; padding-top:8px; border-top:1px solid #e4e4e0; font-size:12px; color:#6b6b68;">
<strong style="color:#0a1f44;">Custom automated systems for South African businesses</strong><br>
24/7 lead response, bookings &amp; follow-ups.
</div>
</td></tr></table>
```

Note: this is text/emoji-based rather than the logo-graphic version Ewan uses elsewhere, because it needs to render standalone in any inbox without depending on a hosted image. Once growmaticsa.com is live, this can be upgraded to reference the hosted logo at `https://growmaticsa.com/assets/logo.png` instead of the 📞/✉️/🌐/📅 glyphs.
