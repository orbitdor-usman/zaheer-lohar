import Link from "next/link";
import { InformationPage } from "@/components/information-page";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({ title: "Terms of Use", description: "Terms for using Zaheer Lohar’s official website and submitting inquiries.", path: "/terms" });

export default function Terms() {
  return <InformationPage eyebrow="Site information" title="Terms of use." description="A few guidelines for using the website and getting in touch.">
    <p className="information-page__updated">Last updated: November 2, 2026</p>
    <section><h2>Using this website</h2><p>You may use this site to discover music, view information and contact the team. Please do not misuse the site, interfere with its operation, submit misleading information or attempt unauthorized access.</p></section>
    <section><h2>Music and content</h2><p>Music, videos, photographs, artwork and other content may be protected by copyright or other rights held by Zaheer Lohar or their respective owners. Viewing or listening on this site does not grant permission to reproduce, distribute or commercially use that content. Contact the team for permission requests.</p></section>
    <section><h2>Bookings and inquiries</h2><p>Submitting a booking or promotion inquiry is a request for discussion, not a confirmed booking or agreement. Availability, pricing and other terms must be agreed separately with the team.</p></section>
    <section><h2>External services</h2><p>Links and embedded content may lead to third-party services with their own terms and privacy practices. We do not control those services. Website information may change, and the site is provided as available without a guarantee of uninterrupted access.</p></section>
    <section><h2>Questions</h2><p>For questions about these terms, <Link href="/contact">contact the team</Link> at <a href="mailto:hello@zaheerlohar.com">hello@zaheerlohar.com</a>. These terms may be updated as the website evolves.</p></section>
  </InformationPage>;
}
