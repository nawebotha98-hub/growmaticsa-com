import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const WHATSAPP_NUMBER = "27827900255";

export default defineTool({
  name: "get_booking_link",
  title: "Get consultation booking link",
  description:
    "Returns a pre-filled WhatsApp link to book a free business consultation with GrowMatic. Optionally include a short note about the caller's business or interest to pre-fill the message.",
  inputSchema: {
    note: z
      .string()
      .max(300)
      .optional()
      .describe("Optional short note about the business or interest (max 300 chars)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: ({ note }) => {
    const message = note?.trim()
      ? `Hi! I'd like to book a free business consultation. ${note.trim()}`
      : "Hi! I'd like to book a free business consultation.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    return {
      content: [{ type: "text", text: url }],
      structuredContent: { url, whatsappNumber: `+${WHATSAPP_NUMBER}` },
    };
  },
});
