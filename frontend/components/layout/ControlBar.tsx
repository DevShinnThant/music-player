import {
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle,
} from "iconsax-react";
import { forwardRef } from "react";
import { Slider } from "../ui/slider";
import { formatDuration } from "@/lib/utils";

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
  currentTime: number;
  duration: number;
  onTrackChange: (value: number) => void;
}

export const ControlBar = forwardRef<HTMLAudioElement, Props>(
  (
    { isPlaying, onTogglePlay, currentTime, duration, onTrackChange }: Props,
    ref
  ) => {
    return (
      <>
        <audio hidden ref={ref} />
        <div className="flex h-full flex-col gap-5 items-center justify-center">
          <div className="flex items-center gap-6">
            <Shuffle className="cursor-pointer" size={20} color="gray" />
            <Previous className="cursor-pointer" size={20} color="#919693" />
            <div onClick={onTogglePlay} className="cursor-pointer">
              {isPlaying ? (
                <PauseCircle color="white" size={36} variant="Bulk" />
              ) : (
                <PlayCircle color="white" size={36} variant="Bulk" />
              )}
            </div>
            <Next className="cursor-pointer" size={20} color="#919693" />
            <RepeateOne className="cursor-pointer" size={20} color="#919693" />
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <div className="text-xs text-textSecondary">
              {formatDuration(currentTime)}
            </div>

            <Slider
              min={0}
              max={duration}
              value={[currentTime]}
              onValueChange={(e) => {
                onTrackChange(e[0]);
              }}
              className="w-3/6"
            />

            <div className="text-xs text-textSecondary">
              {formatDuration(duration)}
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default ControlBar;
