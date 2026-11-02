import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

const questions = [
  { question: "What kind of music does Zaheer Lohar sing?", answer: <>Zaheer Lohar is a Pakistani folk singer from Lahore whose music includes Punjabi and Saraiki songs. Discover more about the artist on the <Link href="/about-us">about page</Link>.</> },
  { question: "Where can I listen to the songs?", answer: <>Explore music videos on the <Link href="/music">music page</Link> and browse the <Link href="/playlists">playlists</Link> for curated collections.</> },
  { question: "How can I book a live performance?", answer: <>Use the <Link href="/booking">booking form</Link> to share your event date, location and details. The team can then discuss availability and arrangements.</> },
];

export function QuestionsSection() {
  return <section className="home-questions" aria-labelledby="home-questions-title"><div className="page-shell home-questions__layout"><div className="home-questions__intro"><p className="home-extra__eyebrow"><span /> Good to know</p><h2 id="home-questions-title">A little more{" "}<br /><em>about the music.</em></h2><p>Whether you’re here to listen or planning an event, start with a few helpful answers.</p><Link href="/faq">See all questions <ArrowUpRight size={16} /></Link></div><div className="home-questions__list">{questions.map(({ question, answer }, index) => <details key={question} open={index === 0 ? true : undefined}><summary><span>{question}</span><Plus size={18} aria-hidden="true" /></summary><div>{answer}</div></details>)}</div></div></section>;
}
