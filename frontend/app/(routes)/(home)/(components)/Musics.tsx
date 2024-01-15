"use client";

import { SelectMusic } from "@/lib/store/server/music/types";
import MusicItem from "./MusicItem";
import { useState } from "react";
import { useMusicStore } from "@/lib/store/client/music";

interface Props {
  data: SelectMusic[];
}

export default function Musics({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState<string>("");

  const { setCurrentMusic } = useMusicStore();

  const onPlayHandler = (music: SelectMusic) => {
    setActiveIndex(music.id);
    setCurrentMusic(music);
  };

  return (
    <div className="w-2/5  flex flex-col gap-2 items-start h-full overflow-auto">
      <div className="text-white text-lg font-semibold tracking-wide">
        Songs
      </div>
      <div className="w-full pb-24 pr-3 flex flex-col items-start gap-4 overflow-y-scroll scroll-hidden">
        {data.map((item) => {
          return (
            <MusicItem
              key={item.id}
              item={item}
              activeIndex={activeIndex}
              onPlayHandler={onPlayHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
