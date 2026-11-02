import Image from "next/image";
import { ArrowDown, ArrowUpRight, CalendarDays, Mic2, Music2 } from "lucide-react";
import { BookingForm } from "@/components/booking/booking-form";
import { createPageMetadata } from "@/lib/seo/site";
import "./booking.css";

export const metadata = createPageMetadata({
  title: "Book Zaheer Lohar",
  description: "Book Zaheer Lohar for live concerts, private celebrations, cultural events, and brand performances.",
  path: "/booking",
  keywords: ["book Zaheer Lohar", "Zaheer Lohar live performance booking", "Pakistani singer for events", "Lahore folk singer booking"],
});

const occasions = [
  { icon: Mic2, number: "01", title: "Concerts & festivals", description: "Music made for the stage and the people gathered around it." },
  { icon: Music2, number: "02", title: "Private celebrations", description: "A memorable live performance for your most meaningful moments." },
  { icon: CalendarDays, number: "03", title: "Cultural & brand events", description: "Bring a distinctive voice to your next event or collaboration." },
];

export default function BookingPage() {
  return (
    <main className="booking-experience">
      <section className="booking-hero" aria-labelledby="booking-hero-title">
        <Image className="booking-hero__image" src="/images/banner.png" alt="Zaheer Lohar singing on stage" fill priority sizes="100vw" />
        <div className="booking-hero__shade" aria-hidden="true" />
        <div className="page-shell booking-hero__inner">
          <p className="booking-kicker"><span /> Live with Zaheer Lohar</p>
          <h1 id="booking-hero-title">A voice for<br /><em>your moment.</em></h1>
          <p className="booking-hero__description">From intimate celebrations to unforgettable stages, bring the warmth of live music to your next occasion.</p>
          <a className="booking-hero__action" href="#booking-inquiry">Start your inquiry <ArrowDown size={16} /></a>
          <div className="booking-hero__caption"><span>Punjabi &amp; Saraiki folk</span><span>Live performances</span></div>
        </div>
      </section>

      <section className="booking-occasions page-shell" aria-labelledby="booking-occasions-title">
        <div className="booking-occasions__heading"><div><p className="booking-kicker"><span /> The occasion</p><h2 id="booking-occasions-title">Made to be shared.</h2></div><p>Every gathering has its own story. Let’s make music a part of yours.</p></div>
        <div className="booking-occasions__grid">{occasions.map(({ icon: Icon, number, title, description }) => <article className="booking-occasion" key={number}><div className="booking-occasion__top"><Icon size={22} strokeWidth={1.35} /><span>{number}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="booking-inquiry" id="booking-inquiry" aria-labelledby="booking-inquiry-title">
        <div className="page-shell booking-inquiry__layout">
          <div className="booking-inquiry__story">
            <p className="booking-kicker"><span /> Begin the conversation</p>
            <h2 id="booking-inquiry-title">Let’s make it<br /><em>memorable.</em></h2>
            <p>Tell us about your event and the team will be in touch to discuss availability and the details.</p>
            <div className="booking-inquiry__portrait"><Image src="/images/artist-performance.png" alt="Zaheer Lohar holding a traditional instrument" fill sizes="(max-width: 800px) 100vw, 40vw" /><div><span>The sound of a story</span><strong>Zaheer Lohar</strong></div></div>
            <a className="booking-inquiry__email" href="mailto:hello@zaheerlohar.com">hello@zaheerlohar.com <ArrowUpRight size={15} /></a>
          </div>
          <div className="booking-inquiry__panel"><div className="booking-inquiry__panel-heading"><span>Booking inquiry</span><p>Fields marked * are required</p></div><BookingForm /></div>
        </div>
      </section>
    </main>
  );
}
