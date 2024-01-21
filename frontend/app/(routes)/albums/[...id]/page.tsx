import { getAlbum } from "@/lib/store/server/album/get";
import { cn, formatTimeHMS } from "@/lib/utils";
import { ArrowLeft2, ArrowRight2, Heart, More } from "iconsax-react";
import Image from "next/image";
import SongSection from "./(components)/SongSection";

export default async function Album({
  params: { id },
}: {
  params: { id: number };
}) {
  const data = await getAlbum(id);

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  const coverColor = coverColorMap.get(String(randomNumber));

  return (
    <div className="w-full h-full flex flex-col gap-4 items-start overflow-hidden">
      <div className="w-full rounded-t-md h-2/5  flex flex-col gap-5 items-start">
        {/* Cover */}
        <div
          className={cn(
            `w-full h-[80%] shadow-md p-5 relative bg-gradient-to-r  rounded-t-md `,
            coverColor
          )}
        >
          <div className="absolute top-2 left-4 flex items-center gap-3">
            <div className=" cursor-pointer w-7 h-7 rounded-full flex items-center justify-center bg-black bg-opacity-40">
              <ArrowLeft2 color="white" size={17} />
            </div>{" "}
            <div className=" cursor-pointer w-7 h-7 rounded-full flex items-center justify-center bg-black bg-opacity-40">
              <ArrowRight2 color="white" size={17} />
            </div>
          </div>
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
                  {data.songs.length} {data.songs.length > 1 ? "songs" : "song"}
                  ,
                </div>
                <div>{formatTimeHMS(data.duration)}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Cover */}

        <div className="w-full flex items-center gap-5">
          <Heart color="white" size={24} />
          <div className="w-24 h-6 rounded-xl text-gray-400 text-xs flex items-center justify-center border border-gray-200">
            Following
          </div>
          <More color="white" size={24} />
        </div>
        <div className="text-white">Songs</div>
      </div>

      <div className="w-full h-[calc(100vh_-_420px)] overflow-y-auto">
        <SongSection data={data.songs} />
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
