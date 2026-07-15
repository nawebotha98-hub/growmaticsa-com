import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    name: "24/7 Customer Response",
    channels: ["WhatsApp", "Email", "Website live chat widget"],
    description:
      "Answers every customer in seconds across WhatsApp, email and your website — day or night — and only brings you in when a real person is genuinely needed. No enquiry ever goes cold, and you look bigger and more professional.",
  },
  {
    name: "Lead Management",
    description:
      "Captures every enquiry from any source and follows up automatically over WhatsApp and email until the customer books, buys, or clearly says no — so more of the leads you already pay for turn into paying customers.",
  },
  {
    name: "Effortless Booking & Appointments",
    description:
      "Customers self-book in seconds and get friendly reminders before every appointment — a fuller diary, far fewer no-shows, and zero admin on your side.",
  },
  {
    name: "Never Miss a Lead (Missed-Call Recovery)",
    description:
      "The moment a call is missed, GrowMatic sends the caller a friendly WhatsApp within seconds — a missed call becomes a live conversation instead of a lost customer.",
  },
  {
    name: "Business Intelligence Dashboard",
    description:
      "A private, always-current view of every upcoming booking and new lead in one place. No extra app, no separate login — you always know exactly where the business stands.",
  },
  {
    name: "Reputation & Reviews",
    description:
      "Asks happy customers for a Google review at exactly the right moment and drafts an on-brand reply to every review for one-tap approval — more 5-star reviews, more trust, more new customers.",
  },
  {
    name: "Marketing on Autopilot",
    description:
      "Creates, schedules and posts to Facebook and Instagram consistently on your behalf — your business stays visible and top-of-mind without you opening the app.",
  },
  {
    name: "Business Process Optimisation",
    description:
      "Maps and streamlines the repetitive work behind the scenes — quotes, invoices, onboarding, reporting — so there's less manual admin, fewer mistakes, and more time to grow.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List GrowMatic services",
  description:
    "Returns the full catalog of business growth and automation solutions GrowMatic provides for South African businesses.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
