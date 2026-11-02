import Link from "next/link";
import { InformationPage } from "@/components/information-page";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({ title: "Frequently Asked Questions", description: "Answers about Zaheer Lohar’s music, playlists, bookings and collaborations.", path: "/faq" });

export default function FAQ() {
  return <InformationPage eyebrow="Good to know" title="Frequently asked questions." description="A little more about the music, performances and how to reach the team.">
    <section><h2>Who is Zaheer Lohar?</h2><p>Zaheer Lohar is a Pakistani folk singer, songwriter and performer from Lahore. His work includes Punjabi and Saraiki music. Read more on the <Link href="/about-us">about page</Link>.</p></section>
    <section><h2>Where can I listen to Zaheer Lohar’s songs?</h2><p>Explore music videos on the <Link href="/music">music page</Link>, browse <Link href="/playlists">playlists</Link>, or find official social channels on the <Link href="/follow">follow page</Link>.</p></section>
    <section><h2>How can I book a live performance?</h2><p>Send the team an inquiry through the <Link href="/booking">booking page</Link> with your event date, venue, location and other relevant details. The team can then discuss availability and arrangements.</p></section>
    <section><h2>Can I propose a collaboration or promotion?</h2><p>Yes. Use the <Link href="/promotion">promotion form</Link> to describe your campaign, platform and ideas so the team can review them.</p></section>
    <section><h2>How do I request permission to use a song or video?</h2><p>Contact <a href="mailto:hello@zaheerlohar.com">hello@zaheerlohar.com</a> with the content, intended use and distribution details. Please obtain permission from the relevant rights holders before using protected material.</p></section>
    <section><h2>How do I contact the team?</h2><p>Visit the <Link href="/contact">contact page</Link> for general, booking and collaboration inquiries.</p></section>
  </InformationPage>;
}
