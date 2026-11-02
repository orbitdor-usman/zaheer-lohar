import { absoluteUrl, artistDescription, artistName, siteUrl } from "@/lib/seo/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#artist`,
    name: artistName,
    url: siteUrl,
    sameAs: ["https://www.youtube.com/channel/UCdv_JXKg3baC43xD-3hw33Q"],
    image: absoluteUrl("/images/aboutimage.png"),
    description: artistDescription,
    jobTitle: "Singer, songwriter, and performer",
    genre: ["Punjabi folk", "Saraiki music", "Pakistani folk music"],
    homeLocation: { "@type": "Place", name: "Lahore, Pakistan" },
    award: "PTV award holder",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: `${artistName} official website`,
    url: siteUrl,
    description: artistDescription,
    publisher: { "@id": `${siteUrl}/#artist` },
    inLanguage: "en",
  },
];

export function StructuredData() {
  return structuredData.map((item) => <script key={item["@id"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />);
}
