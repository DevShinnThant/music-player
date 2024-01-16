"use client";

import DisplayMusic from "./DisplayMusic";
import ControlBar from "./ControlBar";
import VolumeBar from "./VolumeBar";
import useMusic from "@/lib/hooks/useMusic";

export default function Playbar() {
  const {
    audioRef,
    currentMusic,
    currentTime,
    duration,
    volume,
    isPlaying,
    onTogglePlay,
    onVolumeChange,
    onTrackChange,
    onNextChange,
    onPreviousChange,
    onRepeatedToggle,
    isRepeated,
    isShuffleMode,
    onShuffleToggle,
  } = useMusic();

  return (
    <div className="fixed bottom-0 w-[calc(100vw_-_260px)] h-[108px] bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3">
          <DisplayMusic currentMusic={currentMusic!} />
        </div>
        <div className="col-span-6">
          <ControlBar
            ref={audioRef}
            currentTime={currentTime}
            duration={duration}
            onTrackChange={onTrackChange}
            onTogglePlay={onTogglePlay}
            isPlaying={isPlaying}
            onNext={onNextChange}
            onPrevious={onPreviousChange}
            isRepeated={isRepeated}
            onRepeatedToggle={onRepeatedToggle}
            isShuffleMode={isShuffleMode}
            onShuffleToggle={onShuffleToggle}
          />
        </div>
        <div className="col-span-3 p-3 flex items-center justify-center">
          <VolumeBar volume={volume} onVolumeChange={onVolumeChange} />
        </div>
      </div>
    </div>
  );
}
