import { SelectAlbum } from "@/lib/store/server/album/types";
import { Play } from "iconsax-react";
import Image from "next/image";

interface Props {
  item: SelectAlbum;
}

export default function AlbumItem({ item }: Props) {
  return (
    <div
      key={item.id}
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

      <div className=" z-10 absolute flex items-center justify-center translate-x-[100px] translate-y-32 opacity-0 group-hover:opacity-90 transition-transform group-hover:translate-y-28 w-10 h-10 rounded-full bg-blue-600">
        <Play variant="Bold" size={20} color="white" />
      </div>
    </div>
  );
}
