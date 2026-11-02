import Link from "next/link";
import { ArrowUpRight, Headphones, Mic2, Radio } from "lucide-react";

const paths = [
  { number: "01", icon: Headphones, title: "Listen to the songs", text: "Explore Punjabi and Saraiki music, from new videos to songs worth returning to.", href: "/music", action: "Discover music" },
  { number: "02", icon: Radio, title: "Find your next playlist", text: "Browse collections of performances and music videos gathered in one place.", href: "/playlists", action: "Browse playlists" },
  { number: "03", icon: Mic2, title: "Bring music to your event", text: "Planning a concert or celebration? Share your ideas with Zaheer’s team.", href: "/booking", action: "Make an inquiry" },
];

export function HomeDiscovery() {
  return <section className="home-discovery" aria-labelledby="home-discovery-title"><div className="page-shell">
    <div className="home-discovery__intro"><div><p className="eyebrow">A place for the music</p><h2 id="home-discovery-title">Listen closer.<br /><em>Stay connected.</em></h2></div><p>From folk stories to the energy of a live performance, find your way into the world of Zaheer Lohar.</p></div>
    <div className="home-discovery__grid">{paths.map(({ number, icon: Icon, title, text, href, action }) => <article className="home-discovery__card" key={number}><div className="home-discovery__card-top"><Icon size={22} strokeWidth={1.4} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><Link href={href}>{action} <ArrowUpRight size={15} /></Link></article>)}</div>
  </div></section>;
}
