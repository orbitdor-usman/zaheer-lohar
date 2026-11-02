import { PlaylistsBrowser } from "@/components/playlists/playlists-browser";
import { cache } from "react";
import { connectDb } from "@/lib/db/connection";
import { getSettings, listFeaturedPlaylists, listPublicPlaylists } from "@/lib/services/playlist-manager";
import { createPageMetadata } from "@/lib/seo/site";

export const dynamic = "force-dynamic";

const readSettings = cache(async () => {
  try {
    await connectDb();
    return await getSettings();
  } catch {
    return null;
  }
});

export async function generateMetadata() {
  const settings = await readSettings();
  const title = settings?.playlistPageTitle || "Playlists";
  const description = settings?.playlistPageDescription || "Explore curated playlists, live performances, interviews, concerts, and music from Zaheer Lohar.";
  return createPageMetadata({
    title,
    description,
    path: "/playlists",
    image: "/images/playlist-placeholder.svg",
    imageAlt: "Playlist collections from Zaheer Lohar",
    keywords: ["Zaheer Lohar playlists", "Punjabi music playlists", "Pakistani folk music collection", "YouTube playlists"],
  });
}

async function getInitialPlaylists() {
  try {
    await connectDb();
    const settings = await readSettings();
    const limit = Math.min(48, Math.max(1, Number(settings?.defaultPlaylistLimit) || 12));
    const [featured, result] = await Promise.all([
      listFeaturedPlaylists(),
      listPublicPlaylists({ page: 1, limit }),
    ]);
    const initialData = JSON.parse(JSON.stringify({
      settings: { title: settings?.playlistPageTitle, description: settings?.playlistPageDescription },
      featured,
      playlists: result.rows,
      pagination: { page: 1, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
    }));
    return initialData;
  } catch {
    return null;
  }
}

export default async function PlaylistsPage() {
  const initialData = await getInitialPlaylists();
  return <PlaylistsBrowser initialData={initialData} />;
}
