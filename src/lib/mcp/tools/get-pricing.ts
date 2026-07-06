import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PLANS = [
  {
    name: "Starter",
    setup: "R4,999 once-off",
    monthly: "R999/month",
    features: [
      "1 AI automation system",
      "AI agent on WhatsApp, email & website chat widget",
      "2-week average setup",
      "30-day onboarding support",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    setup: "R9,999 once-off",
    monthly: "R1,999/month",
    mostPopular: true,
    features: [
      "3 AI automation systems",
      "AI agent on WhatsApp, email & website chat widget",
      "Lead capture & follow-up across all channels",
      "Booking system included",
      "Priority support + monthly strategy review",
    ],
  },
  {
    name: "Enterprise",
    setup: "Custom",
    monthly: "Custom",
    features: [
      "Unlimited automations",
      "AI agent on WhatsApp, email & website chat widget",
      "Full business audit + dedicated account manager",
      "Staff training included",
      "SLA and uptime guarantees",
    ],
  },
];

export default defineTool({
  name: "get_pricing",
  title: "Get GrowMatic pricing",
  description:
    "Returns GrowMatic's current pricing plans (Starter, Growth, Enterprise) with setup fee, monthly fee, and included features.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PLANS, null, 2) }],
    structuredContent: { plans: PLANS },
  }),
});
