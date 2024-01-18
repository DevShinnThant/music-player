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

  currentTime: number;
  duration: number;
  onTrackChange: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isRepeated: boolean;
  onRepeatedToggle: () => void;
  isShuffleMode: boolean;
  onShuffleToggle: () => void;
  togglePlay: () => void;
}

export const ControlBar = forwardRef<HTMLAudioElement, Props>(
  (
    {
      isPlaying,
      togglePlay,
      currentTime,
      duration,
      onTrackChange,
      onNext,
      onPrevious,
      isRepeated,
      onRepeatedToggle,
      isShuffleMode,
      onShuffleToggle,
    }: Props,
    ref
  ) => {
    return (
      <>
        <audio hidden ref={ref} />
        <div className="flex h-full flex-col gap-5 items-center justify-center">
          <div className="flex items-center gap-6">
            <Shuffle
              onClick={onShuffleToggle}
              className="cursor-pointer"
              size={20}
              color={isShuffleMode ? "white" : "#919693"}
            />

            <Previous
              onClick={onPrevious}
              className="cursor-pointer"
              size={20}
              color="#919693"
            />

            <div className="cursor-pointer" onClick={togglePlay}>
              {isPlaying ? (
                <PauseCircle color="white" size={36} variant="Bulk" />
              ) : (
                <PlayCircle color="white" size={36} variant="Bulk" />
              )}
            </div>
            <Next
              onClick={() => {
                onNext();
              }}
              className="cursor-pointer"
              size={20}
              color="#919693"
            />
            <RepeateOne
              onClick={onRepeatedToggle}
              className="cursor-pointer"
              size={20}
              color={isRepeated ? "white" : "#919693"}
            />
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
              className="w-3/6 bg-gray-500 h-[2px] rounded-lg"
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
