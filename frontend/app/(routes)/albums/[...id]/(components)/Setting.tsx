import { Heart, More } from "iconsax-react";

export default function Setting() {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="flex items-center gap-5">
        <Heart color="white" size={24} />
        <div className="w-24 h-6 rounded-xl text-gray-400 text-xs flex items-center justify-center border border-gray-200">
          Following
        </div>
        <More color="white" size={24} />
      </div>
      <div className="text-white">Songs</div>
    </div>
  );
}
