import { connectDb } from "@/lib/db/connection";
import { Playlist } from "@/lib/db/models/Playlist";
import { absoluteUrl } from "@/lib/seo/site";

// Refresh periodically and whenever a playlist is changed in the admin.
export const revalidate = 3600;

const publicPaths = [
  "/", "/about-us", "/music", "/playlists", "/follow", "/booking",
  "/promotion", "/contact", "/faq", "/privacy-policy", "/cookie-policy", "/terms",
];

export default async function sitemap() {
  const pages = publicPaths.map((path) => ({ url: absoluteUrl(path) }));
  if (!process.env.MONGODB_URI) return pages;

  try {
    await connectDb();
    const playlists = await Playlist.find({ status: { $ne: "inactive" }, slug: { $type: "string", $ne: "" } })
      .select("slug updatedAt").lean();
    return pages.concat(playlists.map((playlist) => ({
      url: absoluteUrl(`/playlists/${encodeURIComponent(playlist.slug)}`),
      ...(playlist.updatedAt ? { lastModified: playlist.updatedAt } : {}),
    })));
  } catch (error) {
    console.error("Unable to include playlists in sitemap:", error.message);
    return pages;
  }
}
