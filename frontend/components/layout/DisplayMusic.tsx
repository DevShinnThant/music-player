import { SelectMusic } from "@/lib/store/server/music/types";
import { Heart } from "iconsax-react";
import Image from "next/image";

interface Props {
  currentMusic: SelectMusic;
}

export default function DisplayMusic({ currentMusic }: Props) {
  return (
    <div className="flex h-full gap-5 items-center justify-start px-5">
      <Image
        width={64}
        height={64}
        className="rounded-lg"
        alt="song"
        src={currentMusic.image}
      />
      <div className="flex flex-col gap-1 items-start">
        <div className="text-sm text-gray-300 font-medium">
          {currentMusic.name}
        </div>
        <div className="text-xs text-textPrimary">{currentMusic.artist}</div>
      </div>
      <Heart className="cursor-pointer" size={20} color="white" />
    </div>
  );
}
