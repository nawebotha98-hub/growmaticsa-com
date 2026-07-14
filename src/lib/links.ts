// Central place for external destination URLs so they can be swapped in one
// spot (e.g. pointing the demo at a nicer demo.growmaticsa.com subdomain
// later) instead of being hardcoded across components.

// The live, self-serve Demo Center (11 interactive service demos + a live
// Claude chat) is served by the backend at /demo. Overridable via
// VITE_DEMO_URL if it ever moves to its own subdomain.
export const DEMO_URL =
  (import.meta.env.VITE_DEMO_URL as string | undefined) ||
  "https://growmatic-backend-production.up.railway.app/demo";
