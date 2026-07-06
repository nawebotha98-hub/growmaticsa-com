import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most Starter systems go live within 2 weeks. Growth systems typically take 3-4 weeks depending on scope.",
  },
  {
    q: "Which channels does the AI agent work on?",
    a: "One agent across WhatsApp, email, and a live chat widget embedded on your own website.",
  },
  {
    q: "Do you work with businesses outside South Africa?",
    a: "GrowMatic is based in South Africa and focused on the SA market, but the systems work anywhere.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans are month-to-month with no lock-in.",
  },
];

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "Returns frequently asked questions about GrowMatic's service, setup, and pricing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FAQS, null, 2) }],
    structuredContent: { faqs: FAQS },
  }),
});
