"use client";

import { useMusicStore } from "@/lib/store/client/music";
import { SelectAlbum } from "@/lib/store/server/album/types";
import { cn } from "@/lib/utils";
import { Pause, Play } from "iconsax-react";
import Image from "next/image";

interface Props {
  item: SelectAlbum;
  active: boolean;
}

export default function AlbumItem({ item, active }: Props) {
  const {
    insertMusics,
    setCurrentMusic,
    setCurrentAlbum,
    isPlaying,
    togglePlay,
    currentAlbumId,
  } = useMusicStore();

  return (
    <div
      key={item.id}
      onClick={() => {}}
      className="col-span-2 relative group flex flex-col items-start gap-4 p-4 rounded-lg h-56 bg-gray-600 bg-opacity-10 hover:bg-opacity-30 transition cursor-pointer"
    >
      <Image
        width={200}
        height={300}
        alt={item.name}
        src={item.cover}
        className="rounded-lg w-full h-4/6 object-cover"
      />
      <div>
        <div className="text-sm text-white font-semibold">{item.name}</div>
        <div className="text-xs text-textSecondary">{item.artist}</div>
      </div>

      <div
        onClick={(e) => {
          if (currentAlbumId !== item.id) {
            insertMusics(item.songs);
            setCurrentAlbum(item.id);
            setCurrentMusic(item.songs[0].id);
          } else {
            togglePlay();
          }
        }}
        className={cn(
          `z-10 absolute flex items-center justify-center translate-x-[100px] duration-300 translate-y-32 opacity-0 group-hover:opacity-90 transition-transform group-hover:translate-y-28 w-10 h-10 rounded-full bg-blue-600`,
          active && "opacity-100"
        )}
      >
        {isPlaying ? (
          <Pause variant="Bold" size={16} color="white" />
        ) : (
          <Play variant="Bold" size={20} color="white" />
        )}
      </div>
    </div>
  );
}