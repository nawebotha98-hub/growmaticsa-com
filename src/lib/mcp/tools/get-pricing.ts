import { defineTool } from "@lovable.dev/mcp-js";

const PLANS = [
  {
    name: "Growth Starter",
    setup: "R5,000 once-off",
    monthly: "R3,500/month",
    mostPopular: true,
    features: [
      "24/7 customer response on WhatsApp, email & website chat — replies in seconds",
      "Every enquiry captured and followed up automatically",
      "Bookings & appointments straight into your diary",
      "Missed calls recovered instantly by WhatsApp",
      "Monthly results report",
    ],
  },
  {
    name: "Business Autopilot",
    setup: "R7,500 once-off",
    monthly: "R4,500/month",
    features: [
      "Everything in Growth Starter",
      "Automatic quoting & invoice follow-ups",
      "Reminders that cut no-shows",
      "Live business dashboard included",
      "Priority support + monthly growth review",
    ],
  },
  {
    name: "Custom Growth Solution",
    setup: "From R15,000 once-off",
    monthly: "Custom",
    features: [
      "Tailored solution mapped to your exact workflow",
      "Full business review + dedicated account manager",
      "Unlimited custom processes streamlined",
      "Staff training included",
      "Service-level & uptime guarantees",
    ],
  },
];

export default defineTool({
  name: "get_pricing",
  title: "Get GrowMatic pricing",
  description:
    "Returns GrowMatic's current pricing packages (Growth Starter, Business Autopilot, Custom Growth Solution) with setup fee, monthly fee, and included features. Start with a 30-day pilot — month-to-month, cancel anytime.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PLANS, null, 2) }],
    structuredContent: { plans: PLANS },
  }),
});
