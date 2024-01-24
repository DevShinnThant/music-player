import { SelectAlbum } from "@/lib/store/server/album/types";
import { cn, formatTimeHMS } from "@/lib/utils";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import NavigationSection from "./NavigationSection";

interface Props {
  data: SelectAlbum;
}

export default function AlbumCover({ data }: Props) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  const coverColor = coverColorMap.get(String(randomNumber));

  return (
    <div
      className={cn(
        `w-full h-[80%] shadow-md p-5 relative bg-gradient-to-r  rounded-t-md `,
        coverColor
      )}
    >
      <NavigationSection />
      <div className="absolute bottom-2 rounded-md flex items-end gap-8">
        <Image
          width={140}
          height={140}
          src={data.cover}
          alt={data.artist}
          className="w-[140px] h-[140px] object-cover bg-top rounded-sm"
        />
        <div className="flex flex-col items-start">
          <div className="text-sm text-white">Album</div>
          <div className="text-5xl text-white font-semibold tracking-wide">
            {data.name}
          </div>
          <div className="flex text-xs text-white items-center gap-4">
            <div className=" flex items-center gap-1">
              <span className="font-medium">{data.artist}</span>
              <span className="text-2xl">·</span>
            </div>
            <div>
              {data.songs.length} {data.songs.length > 1 ? "songs" : "song"},
            </div>
            <div>{formatTimeHMS(data.duration)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const coverColorMap = new Map([
  ["1", "from-red-300"],
  ["2", "from-blue-300"],
  ["3", "from-green-300"],
  ["4", "from-orange-300"],
  ["5", "from-yellow-200"],
  ["6", "from-gray-300"],
]);
