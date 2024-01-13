import { SelectMusic } from "@/lib/store/server/music/types";
import { PlayCircle } from "iconsax-react";
import Image from "next/image";
import MusicItem from "./MusicItem";

interface Props {
  data: SelectMusic[];
}

export default function Musics({ data }: Props) {
  return (
    <div className="w-2/5 flex flex-col gap-2 items-start h-full overflow-auto">
      <div className="text-white text-lg font-semibold tracking-wide">
        Songs
      </div>
      <div className="w-full flex flex-col items-start gap-4 overflow-y-scroll">
        {data.map((item) => {
          return <MusicItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
