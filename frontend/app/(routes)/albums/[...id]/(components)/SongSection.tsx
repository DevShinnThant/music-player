"use client";

import { SelectMusic } from "@/lib/store/server/music/types";
import { formatTimeMS } from "@/lib/utils";
import { Heart, More, Play } from "iconsax-react";
import Image from "next/image";

interface Props {
  data: SelectMusic[];
}

export default function SongSection({ data }: Props) {
  return (
    <div className="pb-20 pr-2 flex w-full h-full overflow-y-scroll flex-col items-start">
      {data.map((item, index) => (
        <div className="group flex hover:bg-gray-500 hover:bg-opacity-20 px-3 py-2 rounded-md cursor-pointer w-full items-center gap-5">
          <div className="w-4">
            <div className="text-gray-400 group-hover:hidden text-sm">
              {index + 1}
            </div>
            <div className="group-hover:block hidden">
              <Play variant="Bold" color="white" size={14} />
            </div>
          </div>
          <div className="flex flex-1 items-center gap-3">
            <Image
              className="rounded-md"
              width={40}
              height={40}
              alt={item.name}
              src={item.image}
            />
            <div className="text-gray-300 text-sm">{item.name}</div>
          </div>
          <div className="text-xs w-96 text-gray-400">
            {item.listeners.toLocaleString()}
          </div>
          <div className="flex items-center w-32 justify-between">
            <div className=" w-2/6 group-hover:block hidden cursor-pointer">
              <Heart size={14} color="white" />
            </div>
            <div className="flex-1 pl-[42px] group-hover:pl-0 text-xs  text-gray-400">
              {formatTimeMS(item.duration)}
            </div>
            <div className="w-2/6  hidden group-hover:flex group-hover:justify-end    cursor-pointer">
              <More size={14} color="white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
