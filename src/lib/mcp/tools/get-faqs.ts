import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FAQS = [
  {
    q: "How long until it's up and running?",
    a: "Most businesses on Growth Starter are live within 2 weeks. Business Autopilot and the Custom Growth Solution typically take 3-4 weeks depending on scope. Start with a 30-day pilot — month-to-month, cancel anytime.",
  },
  {
    q: "Which channels does it cover?",
    a: "Your customers are looked after across WhatsApp, email, and a live chat widget on your own website — all from one place.",
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
