"use client";

import { SelectMusic } from "@/lib/store/server/music/types";
import Image from "next/image";

interface Props {
  data: SelectMusic[];
}

export default function SongSection({ data }: Props) {
  return (
    <div className="pb-20 flex w-full h-full overflow-y-scroll flex-col gap-4 items-start">
      {data.map((item, index) => (
        <div className="flex cursor-pointer w-full items-center gap-4">
          <div className="text-white">{index + 1}</div>
          <div className="flex flex-1 items-center gap-3">
            <Image
              className="rounded-md"
              width={50}
              height={50}
              alt={item.name}
              src={item.image}
            />
            <div className="text-gray-300 text-sm">{item.name}</div>
          </div>
          <div className="text-xs w-96 text-gray-400">3342,234,234</div>
          <div className="text-xs w-20 text-gray-400">4:20</div>
        </div>
      ))}
    </div>
  );
}
