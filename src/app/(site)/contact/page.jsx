import Link from "next/link";
import { InformationPage } from "@/components/information-page";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({ title: "Contact Zaheer Lohar", description: "Contact Zaheer Lohar’s team about performances, collaborations and general questions.", path: "/contact" });

export default function Contact() {
  return <InformationPage eyebrow="Get in touch" title="Let’s connect." description="For the music, the moments and the ideas you would like to share.">
    <section><h2>General inquiries</h2><p>For questions about the website, music or other general matters, write to <a href="mailto:hello@zaheerlohar.com">hello@zaheerlohar.com</a>.</p></section>
    <section><h2>Book a performance</h2><p>Planning a concert, festival, wedding or private celebration? Use the <Link href="/booking">booking form</Link> to share the date, location and details with the team.</p></section>
    <section><h2>Promotions and collaborations</h2><p>For a campaign, brand partnership or music collaboration, tell us about your idea through the <Link href="/promotion">promotion inquiry form</Link>.</p></section>
    <section><h2>Follow the music</h2><p>Find the artist’s social channels and keep up with performances and releases on the <Link href="/follow">follow page</Link>.</p></section>
  </InformationPage>;
}
