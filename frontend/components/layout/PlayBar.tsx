import Image from "next/image";
import {
  Heart,
  Next,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle,
  VolumeHigh,
} from "iconsax-react";
import { Slider } from "../ui/slider";

export default function Playbar() {
  return (
    <div className="absolute overflow-hidden bottom-0 w-full h-[108px] bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex h-full gap-5 items-center justify-start px-5">
            <Image
              priority
              width={64}
              height={64}
              className="rounded-lg"
              alt="song"
              src="https://github.com/shadcn.png"
            />
            <div className="flex flex-col gap-1 items-start">
              <div className="text-sm text-gray-300 font-medium">
                Higher Power
              </div>
              <div className="text-xs text-textPrimary">Coldplay</div>
            </div>
            <Heart className="cursor-pointer" size={20} color="white" />
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex h-full flex-col gap-5 items-center justify-center">
            <div className="flex items-center gap-6">
              <Shuffle className="cursor-pointer" size={20} color="gray" />
              <Previous className="cursor-pointer" size={20} color="#919693" />
              <PlayCircle
                className="cursor-pointer"
                color="white"
                size={36}
                variant="Bulk"
              />
              <Next className="cursor-pointer" size={20} color="#919693" />
              <RepeateOne
                className="cursor-pointer"
                size={20}
                color="#919693"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-3">
              <div className="text-xs text-textSecondary">1:12</div>
              <Slider className="text-active w-4/6" />
              <div className="text-xs text-textSecondary">3:28</div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-3 flex items-center justify-center">
          <div className="w-full flex items-center justify-end gap-3">
            <VolumeHigh size={18} color="white" />
            <Slider className="w-3/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
