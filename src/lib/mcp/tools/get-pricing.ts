import { defineTool } from "@lovable.dev/mcp-js";

const PLANS = [
  {
    name: "Lead Response Bot",
    setup: "R5,000 once-off",
    monthly: "R3,500/month",
    mostPopular: true,
    features: [
      "AI agent answering on WhatsApp, email & website chat — 24/7, replies in seconds",
      "Lead capture & instant follow-up on every enquiry",
      "Booking & appointment automation straight into your diary",
      "Missed Call Text-Back included",
      "Monthly performance report",
    ],
  },
  {
    name: "Admin Autopilot",
    setup: "R7,500 once-off",
    monthly: "R4,500/month",
    features: [
      "Everything in Lead Response Bot",
      "Automated quoting & invoice follow-ups",
      "Customer reminders (reduce no-shows)",
      "Client Dashboard included",
      "Priority support + monthly strategy review",
    ],
  },
  {
    name: "Custom Automation Build",
    setup: "From R15,000 once-off",
    monthly: "Custom",
    features: [
      "Bespoke workflow automation (CRM, email, WhatsApp, sheets)",
      "Full business audit + dedicated account manager",
      "Unlimited custom automations",
      "Staff training included",
      "SLA and uptime guarantees",
    ],
  },
];

export default defineTool({
  name: "get_pricing",
  title: "Get GrowMatic pricing",
  description:
    "Returns GrowMatic's current pricing packages (Lead Response Bot, Admin Autopilot, Custom Automation Build) with setup fee, monthly fee, and included features. Start with a 30-day pilot — month-to-month, cancel anytime.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PLANS, null, 2) }],
    structuredContent: { plans: PLANS },
  }),
});
