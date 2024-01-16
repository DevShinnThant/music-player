import { SelectedPlaylist } from "@/lib/store/server/playlist/types";
import { formatTimeHMS } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: SelectedPlaylist[];
}

export default function Playlists({ data }: Props) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-lg text-white font-semibold tracking-wide">
          Top playlists for you
        </div>
        <Link href="/recent-plays" className="text-gray-300 text-sm">
          See all
        </Link>
      </div>
      <div className=" grid grid-cols-12 gap-4">
        {data.map((item) => (
          <div className="col-span-4 cursor-pointer flex flex-col gap-2 items-start">
            <div className="relative w-full h-[180px]">
              <Image fill className="rounded-lg" alt="test" src={item.image} />
            </div>
            <div className="text-gray-300 text-sm">{item.name}</div>
            <div className="text-textSecondary text-xs">
              {item.soundCount} songs, {formatTimeHMS(item.duration)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
