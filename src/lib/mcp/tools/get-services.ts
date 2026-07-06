import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    name: "AI Customer Service Agent",
    channels: ["WhatsApp", "Email", "Website live chat widget"],
    description:
      "One AI agent across WhatsApp, email, and a live chat widget on your own website. Answers FAQs, qualifies leads, drafts on-brand email replies and follow-ups, escalates only when a human needs to step in.",
  },
  {
    name: "Lead Capture & Follow-Up",
    description:
      "Captures leads from any source and follows up automatically over WhatsApp and email until they book or buy.",
  },
  {
    name: "Booking & Appointment Automation",
    description:
      "Customers self-book on WhatsApp in seconds. Automated reminders reduce no-shows.",
  },
  {
    name: "Missed Call Text-Back",
    description:
      "When you can't answer, GrowMatic auto-sends the caller a WhatsApp message within seconds — a missed call becomes a live conversation instead of a lost customer.",
  },
  {
    name: "Client Dashboard",
    description:
      "A private, always-up-to-date link showing upcoming bookings and leads. No extra app, no separate login.",
  },
  {
    name: "Review & Reputation Manager",
    description:
      "Asks happy customers for Google reviews at the right moment. AI drafts on-brand replies for one-tap approval.",
  },
  {
    name: "Social Media Automation",
    description:
      "Generates, schedules, and posts to Facebook and Instagram consistently.",
  },
  {
    name: "Custom AI Workflows",
    description:
      "Any repetitive process mapped and automated: invoices, onboarding, reporting.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List GrowMatic services",
  description:
    "Returns the full catalog of AI automation services GrowMatic builds for South African businesses.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
