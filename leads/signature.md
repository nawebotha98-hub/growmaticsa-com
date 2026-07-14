# Standard email signature

Used in every outreach draft going forward (HTML version baked into each Gmail draft's `htmlBody`; plain-text version used in `body` and in the `leads/drafts/*.md` files).

## ⭐ Ewan's real Gmail signature (use this in email drafts)

This is Ewan's actual configured Gmail signature — a single hosted branded
image (logo + name + phone + email + web + tagline, all baked into the image)
followed by the WhatsApp booking link. **Any Gmail email draft created via the
API must use this exact block** so the sent email matches what Ewan sends by
hand. Pulled verbatim from a real sent message (2026-07-13).

```html
<br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><img src="https://ci3.googleusercontent.com/mail-sig/AIorK4xxKWKI5-L3RyLR0AFzehvJNciQcYddJtuTddxxr9YG_lPepZgnF3Nd6pB3jCTvwoa3_tYBXVJSBuCt" width="420" height="279"></div><span style="font-family:Aptos,Aptos_EmbeddedFont,Aptos_MSFontService,Calibri,Helvetica,sans-serif;font-size:12pt;color:rgb(31,157,92)"><a href="https://wa.me/27671082665?text=Hi!%20I&#39;d%20like%20to%20book%20a%20free%20strategy%20call." style="color:rgb(31,157,92)" target="_blank"><b>Book a free strategy call on WhatsApp →</b></a></span></div></div>
```

Notes:
- The `mail-sig` image URL is Ewan's hosted Gmail signature graphic; it renders
  for recipients exactly as in his own sent mail. If the signature is ever
  changed in Gmail settings this URL changes — re-pull it from a fresh sent
  message.
- For **contact-form / WhatsApp** sends (no HTML/images), use the plain-text
  signature below instead — you can't paste an image into a web form.

---

## Plain text (for contact forms / WhatsApp / plain-text fallback)

```
Ewan Botha
Founder | GrowMatic SA
+27 67 108 2665
ewan@growmaticsa.com
growmaticsa.com
Book a free strategy call on WhatsApp: https://wa.me/27671082665

AI agents & automation for South African businesses — 24/7 lead response, bookings & follow-ups.
```

## HTML

```html
<table cellpadding="0" cellspacing="0" style="margin-top:6px;"><tr><td>
<div style="font-size:18px; font-weight:bold; color:#0a1f44;">Ewan Botha</div>
<div style="font-size:13px; margin-top:2px;"><span style="color:#1f9d5c; font-weight:bold;">Founder</span> <span style="color:#999;">|</span> <span style="color:#0a1f44;">GrowMatic SA</span></div>
<div style="margin-top:8px; font-size:13px;">
📞 <a href="tel:+27671082665" style="color:#0a1f44; text-decoration:none;">+27 67 108 2665</a><br>
✉️ <a href="mailto:ewan@growmaticsa.com" style="color:#0a1f44; text-decoration:none;">ewan@growmaticsa.com</a><br>
🌐 <a href="https://growmaticsa.com" style="color:#0a1f44; text-decoration:none;">growmaticsa.com</a><br>
📅 <a href="https://wa.me/27671082665" style="color:#1f9d5c; text-decoration:underline;">Book a free strategy call on WhatsApp →</a>
</div>
<div style="margin-top:10px; padding-top:8px; border-top:1px solid #e4e4e0; font-size:12px; color:#6b6b68;">
<strong style="color:#0a1f44;">AI agents &amp; automation for South African businesses</strong><br>
24/7 lead response, bookings &amp; follow-ups.
</div>
</td></tr></table>
```

Note: this is text/emoji-based rather than the logo-graphic version Ewan uses elsewhere, because it needs to render standalone in any inbox without depending on a hosted image. Once growmaticsa.com is live, this can be upgraded to reference the hosted logo at `https://growmaticsa.com/assets/logo.png` instead of the 📞/✉️/🌐/📅 glyphs.
