const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zaheerlohar.com";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const artistName = "Zaheer Lohar";
export const artistDescription = "Zaheer Lohar is a Pakistani folk singer, songwriter, and performer from Lahore, known for Punjabi and Saraiki music, heartfelt songs, and live performances.";

// Keep metadata focused on the artist and subjects actually covered by the site.
export const artistKeywords = [
  "Zaheer Lohar", "Zaheer Lohar singer", "Zaheer Lohar songs",
  "Punjabi folk music", "Saraiki music", "Pakistani folk singer",
];
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}

export function createPageMetadata({ title, description, path = "/", keywords = [], image = "/images/banner.png", imageAlt = `${artistName} official artist website`, imageWidth = 1774, imageHeight = 887 }) {
  const url = absoluteUrl(path);
  const allKeywords = [...new Set([...artistKeywords, ...keywords])];
  const hasArtistName = title.toLocaleLowerCase().includes(artistName.toLocaleLowerCase());
  const fullTitle = hasArtistName ? title : `${title} — ${artistName}`;

  return {
    title: hasArtistName ? { absolute: title } : title,
    description,
    keywords: allKeywords,
    authors: [{ name: artistName, url: siteUrl }],
    creator: artistName,
    publisher: artistName,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
      siteName: artistName,
      locale: "en_PK",
      images: [{ url: absoluteUrl(image), width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
