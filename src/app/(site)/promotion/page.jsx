import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Megaphone, Music2, Sparkles } from "lucide-react";
import { PromotionForm } from "@/components/promotion/promotion-form";
import { createPageMetadata } from "@/lib/seo/site";
import "./promotion.css";

export const metadata = createPageMetadata({
  title: "Promotion & Partnerships",
  description: "Start a music promotion, release campaign, brand partnership, or content collaboration with Zaheer Lohar’s team.",
  path: "/promotion",
  keywords: ["Zaheer Lohar promotion", "Pakistani music promotion", "music brand partnership", "artist collaboration"],
});

const opportunities = [
  { icon: Music2, number: "01", title: "Music releases", copy: "Share a release and connect it with listeners who love the music." },
  { icon: Sparkles, number: "02", title: "Brand partnerships", copy: "Explore a collaboration that feels right for your brand and its audience." },
  { icon: Megaphone, number: "03", title: "Campaigns & content", copy: "Tell us about an event, social campaign or creative idea you have in mind." },
];

export default function PromotionPage() {
  return <main className="promotion-experience">
    <section className="promotion-hero" aria-labelledby="promotion-hero-title">
      <div className="page-shell promotion-hero__layout">
        <div className="promotion-hero__copy">
          <p className="promotion-kicker"><span /> Campaigns &amp; partnerships</p>
          <h1 id="promotion-hero-title">Let’s make something <em>worth sharing.</em></h1>
          <p>Bring your idea, your audience and the music together. Tell us what you’re creating and let’s start a conversation.</p>
          <a className="promotion-hero__action" href="#promotion-inquiry">Start a conversation <ArrowDown size={16} /></a>
          <div className="promotion-hero__meta"><span>Music releases</span><span>Partnerships</span><span>Creative campaigns</span></div>
        </div>
        <div className="promotion-hero__visual">
          <Image src="/images/artist-performance.png" alt="Zaheer Lohar holding a traditional instrument" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
          <div className="promotion-hero__visual-copy"><span>Music connects us</span><strong>Make your next idea heard.</strong></div>
        </div>
      </div>
    </section>

    <section className="promotion-opportunities page-shell" aria-labelledby="promotion-opportunities-title">
      <div className="promotion-opportunities__heading"><div><p className="promotion-kicker"><span /> Ways to work together</p><h2 id="promotion-opportunities-title">The beginning of<br /><em>something meaningful.</em></h2></div><p>Every idea has a story. Share yours and the team can explore the possibilities with you.</p></div>
      <div className="promotion-opportunities__grid">{opportunities.map(({ icon: Icon, number, title, copy }) => <article className="promotion-opportunity" key={number}><div className="promotion-opportunity__top"><Icon size={21} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="promotion-inquiry" id="promotion-inquiry" aria-labelledby="promotion-inquiry-title">
      <div className="page-shell promotion-inquiry__layout">
        <div className="promotion-inquiry__intro"><p className="promotion-kicker"><span /> Tell us your idea</p><h2 id="promotion-inquiry-title">Good work starts <em>with a conversation.</em></h2><p>Share the essentials about your campaign, audience and timing. The team will review your inquiry and follow up by email.</p><div className="promotion-inquiry__note"><span>01</span><p>Give us the details you know. It’s okay if the idea is still taking shape.</p></div><Link href="/playlists">Get to know the music <ArrowUpRight size={15} /></Link></div>
        <div className="promotion-inquiry__panel"><div className="promotion-inquiry__panel-heading"><div><span>Let’s collaborate</span><h3>Start your inquiry.</h3></div><p>Fields marked * are required</p></div><PromotionForm /></div>
      </div>
    </section>
  </main>;
}
