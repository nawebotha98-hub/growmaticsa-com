import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/get-services";
import getPricing from "./tools/get-pricing";
import getBookingLink from "./tools/book-call";
import listFaqs from "./tools/get-faqs";

export default defineMcp({
  name: "growmatic-mcp",
  title: "GrowMatic",
  version: "0.1.0",
  instructions:
    "Tools for GrowMatic — a South African business growth and automation partner that helps businesses win more customers, respond faster and cut manual admin. Use `list_services` to see the solutions GrowMatic provides, `get_pricing` for plans and prices, `list_faqs` for common questions, and `get_booking_link` to generate a WhatsApp link for booking a free business consultation.",
  tools: [listServices, getPricing, listFaqs, getBookingLink],
});
