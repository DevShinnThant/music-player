import { getAlbumns } from "@/lib/store/server/album/get";
import RecentPlays from "./(components)/RecentPlays";
import Link from "next/link";

export default async function Home() {
  const data = await getAlbumns();
  return (
    <div className="flex flex-col items-start w-full h-full">
      {/* Recent Play Albums */}
      <div className="w-full flex flex-col gap-10 items-start justify-start">
        <div className="w-full flex items-center justify-between">
          <div className="text-white text-xl font-semibold tracking-wide">
            Recently Plays
          </div>
          <Link href="/recent-plays" className="text-gray-300 text-sm">
            See all
          </Link>
        </div>
        <RecentPlays data={data} />
      </div>
      {/* Recent Play Albums */}
    </div>
  );
}
