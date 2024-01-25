import { getAlbums } from "@/lib/store/server/album/get";
import RecentPlays from "./(components)/RecentPlays";
import Link from "next/link";
import Musics from "./(components)/Musics";
import { getMusics } from "@/lib/store/server/music/get";
import { Suspense } from "react";
import { getPlaylists } from "@/lib/store/server/playlist/get";
import Playlists from "./(components)/Playlists";

export default async function Home() {
  const albums = await getAlbums();
  const songs = await getMusics();
  const playlists = await getPlaylists();

  return (
    <div className="w-full h-full flex flex-col gap-5 items-start">
      {/* Recent Play Albums */}
      <div className="w-full flex flex-col gap-3 items-start justify-start">
        <div className="w-full flex items-center justify-between">
          <div className="text-white text-xl font-semibold tracking-wide">
            Albums
          </div>
          <Link href="/recent-plays" className="text-gray-300 text-sm">
            See all
          </Link>
        </div>
        <Suspense fallback={<div>Loadinggggg</div>}>
          <RecentPlays data={albums} />
        </Suspense>
      </div>
      {/* Recent Play Albums */}

      <div className="w-full flex-1 flex items-center gap-4 overflow-auto">
        <Suspense fallback={<div>...Loading</div>}>
          <Musics data={[...songs]} />
        </Suspense>

        <div className="flex-1 flex flex-col gap-2  h-full">
          <Playlists data={playlists} />
        </div>
      </div>
    </div>
  );
}
