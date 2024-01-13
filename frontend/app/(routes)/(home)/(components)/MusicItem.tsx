"use client";

import { useMusicStore } from "@/lib/store/client/music";
import { SelectMusic } from "@/lib/store/server/music/types";
import { PauseCircle, PlayCircle } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  item: SelectMusic;
}

export default function MusicItem({ item }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { setCurrentMusic } = useMusicStore();

  return (
    <div className="w-full pr-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Image
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-md"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-300">{item.name}</div>
          <div className="text-xs text-gray-400">{item.artist}</div>
        </div>
      </div>

      <div
        className="cursor-pointer"
        onClick={() => {
          setCurrentMusic(item);
          setIsActive(!isActive);
        }}
      >
        {isActive ? (
          <PauseCircle color="white" size={20} />
        ) : (
          <PlayCircle color="white" size={20} />
        )}
      </div>
    </div>
  );
}
