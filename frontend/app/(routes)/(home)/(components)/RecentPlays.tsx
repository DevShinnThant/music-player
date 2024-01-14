import { SelectAlbum } from "@/lib/store/server/album/types";
import Image from "next/image";

interface Props {
  data: SelectAlbum[];
}

export default function RecentPlays({ data }: Props) {
  return (
    <div className="w-full overflow-x-scroll flex justify-start items-start gap-8">
      {data.map((album) => (
        <div
          key={album.id}
          className="flex flex-col justify-center gap-2 items-center"
        >
          <Image
            className="rounded-lg w-[200px] h-[200px]"
            width={200}
            height={200}
            src={album.cover}
            alt={album.name}
          />
          <div className="w-full flex flex-col item-center">
            <div className="text-white text-sm m-auto">{album.name}</div>
            <div className="text-xs text-gray-500 m-auto">{album.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
