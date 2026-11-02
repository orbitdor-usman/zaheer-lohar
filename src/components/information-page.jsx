import { PageIntro } from "@/components/page-intro";

export function InformationPage({ eyebrow = "Information", title, description, children }) {
  return <main className="inner-page information-page"><PageIntro eyebrow={eyebrow} title={title} description={description} /><div className="page-shell information-page__layout"><aside><span>Zaheer Lohar</span><p>Music, stories and the people who share them.</p></aside><div className="information-page__content">{children}</div></div></main>;
}
