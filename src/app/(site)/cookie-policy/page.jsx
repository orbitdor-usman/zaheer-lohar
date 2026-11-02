import Link from "next/link";
import { InformationPage } from "@/components/information-page";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({ title: "Cookie Policy", description: "Learn about cookies and third-party services on the Zaheer Lohar website.", path: "/cookie-policy" });

export default function CookiePolicy() {
  return <InformationPage eyebrow="Your choices" title="Cookie policy." description="A guide to cookies and similar technologies associated with this website.">
    <p className="information-page__updated">Last updated: November 2, 2026</p>
    <section><h2>What are cookies?</h2><p>Cookies are small pieces of information stored by your browser. Similar technologies can also remember settings or help services understand how they are used.</p></section>
    <section><h2>How this site uses them</h2><p>The administration area uses a session cookie to keep authorized administrators signed in. The public site records visits on the server, including a hashed IP address and page information; this visit recording does not depend on a visitor cookie.</p></section>
    <section><h2>Third-party services</h2><p>Links to YouTube and other external services may allow those providers to use cookies or similar technologies when you visit them, in accordance with their own policies. If Google advertising is introduced, Google and its partners may use such technologies for advertising and measurement. Read <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">Google’s cookie information</a> for details.</p></section>
    <section><h2>Managing your choices</h2><p>You can block or delete cookies using your browser settings, though some features may not work as expected. You can also manage Google ad personalization in <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">My Ad Center</a>. Where required, applicable consent choices will be offered before relevant advertising technologies are used.</p><p>For more on information collected by the site, read our <Link href="/privacy-policy">privacy policy</Link> or email <a href="mailto:hello@zaheerlohar.com">hello@zaheerlohar.com</a>.</p></section>
  </InformationPage>;
}
