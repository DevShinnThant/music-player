import { VolumeHigh } from "iconsax-react";
import { Slider } from "../ui/slider";

interface Props {
  volume: number;
  onVolumeChange: (value: number) => void;
}

export default function VolumeBar({ volume, onVolumeChange }: Props) {
  return (
    <div className="w-full flex items-center justify-end gap-3">
      <VolumeHigh size={18} color="white" />

      <Slider
        min={0}
        max={1}
        step={0.1}
        value={[volume]}
        onValueChange={(e) => onVolumeChange(e[0])}
        className="w-3/6"
      />
    </div>
  );
}

// (e) => {
//   if (!audioRef.current) return;
//   setVolume(e[0]);

//   audioRef.current.volume = e[0];
//   console.log(audioRef.current.volume);
// };
