import { isIP } from "node:net";

// Only trust a header supplied and overwritten by the deployment's proxy.
// Without a trusted proxy, requests deliberately share one conservative bucket.
export function trustedClientAddress(request) {
  const header = process.env.RATE_LIMIT_TRUSTED_IP_HEADER
    || (process.env.VERCEL === "1" ? "x-vercel-forwarded-for" : "");
  const candidate = header ? (request.headers.get(header) || "").split(",")[0].trim() : "";
  return isIP(candidate) ? candidate : "unknown";
}
