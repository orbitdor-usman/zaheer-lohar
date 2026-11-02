import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";

export function MilestoneSection() {
  return <section className="home-milestone" aria-labelledby="milestone-title"><div className="page-shell home-milestone__layout">
    <div className="home-milestone__copy"><p className="home-extra__eyebrow"><Award size={16} aria-hidden="true" /> A shared milestone</p><h2 id="milestone-title">A million reasons{" "}<br /><em>to say thank you.</em></h2><p>Music travels further when it is shared. The YouTube Gold Creator Award celebrates Zaheer Lohar Records passing one million subscribers—a moment made possible by the people listening along the way.</p><a href="https://www.youtube.com/channel/UCdv_JXKg3baC43xD-3hw33Q" target="_blank" rel="noopener noreferrer">Visit the YouTube channel <ArrowUpRight size={16} /></a><Link href="/about-us">More about the artist <ArrowUpRight size={16} /></Link></div>
    <figure className="home-milestone__visual"><div className="home-milestone__image"><Image src="/images/awards/youtube-gold-record.jpg" alt="YouTube Gold Creator Award presented to Zaheer Lohar Records for passing one million subscribers" fill sizes="(max-width: 700px) 85vw, 420px" /></div><figcaption><span>Zaheer Lohar Records</span><strong>1,000,000 subscribers</strong></figcaption></figure>
  </div></section>;
}
