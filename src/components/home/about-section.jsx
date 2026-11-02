import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, Music2 } from "lucide-react";
import { YouTubeIcon } from "@/components/icons/youtube-icon";
import "./about-section.css";

export function AboutSection() {
  return <section className="artist-intro" aria-labelledby="artist-intro-title">
    <div className="page-shell artist-intro__layout">
      <div className="artist-intro__visual">
        <div className="artist-intro__image"><Image src="/images/aboutimage.png" alt="Zaheer Lohar performing with a traditional instrument" fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 44vw, 470px" /></div>
        <div className="artist-intro__image-label"><span><Music2 size={17} aria-hidden="true" /></span><div><small>Rooted in folk</small><strong>Zaheer Lohar</strong></div></div>
        <div className="artist-intro__visual-index" aria-hidden="true">01 / THE ARTIST</div>
      </div>
      <div className="artist-intro__content">
        <p className="artist-intro__eyebrow"><span /> The artist behind the songs</p>
        <h2 id="artist-intro-title">Stories rooted<br /><em>in song.</em></h2>
        <p className="artist-intro__description">Zaheer Lohar is a Pakistani folk singer, songwriter and performer from Lahore. His Punjabi and Saraiki songs carry stories of love, life and home into music videos, live performances and a growing global audience.</p>
        <div className="artist-intro__facts" aria-label="Zaheer Lohar highlights">
          <div><span className="artist-intro__fact-icon"><Award size={18} aria-hidden="true" /></span><strong>PTV</strong><small>Award holder</small></div>
          <div><span className="artist-intro__fact-icon artist-intro__fact-icon--youtube"><YouTubeIcon size={20} /></span><strong>1M+</strong><small>YouTube subscribers</small></div>
          <div><span className="artist-intro__fact-icon"><Music2 size={18} aria-hidden="true" /></span><strong>Punjabi</strong><small>&amp; Saraiki folk</small></div>
        </div>
        <Link className="artist-intro__link" href="/about-us">Discover Zaheer’s story <span><ArrowUpRight size={17} /></span></Link>
      </div>
    </div>
  </section>;
}
