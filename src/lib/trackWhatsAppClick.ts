import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "27827900255";

/**
 * Fire-and-forget log of a WhatsApp CTA click. The link already opens in a
 * new tab, so this never blocks or delays navigation to WhatsApp.
 */
export const trackWhatsAppClick = (button: string, message?: string) => {
  supabase
    .from("whatsapp_clicks")
    .insert({
      button,
      whatsapp_number: WHATSAPP_NUMBER,
      message: message ?? null,
      page_path: typeof window !== "undefined" ? window.location.pathname : null,
    })
    .then(({ error }) => {
      if (error) console.error("Failed to log whatsapp click:", error.message);
    });
};
