"use client";

import Image from "next/image";
import {
  Heart,
  Next,
  PauseCircle,
  PlayCircle,
  Previous,
  RepeateOne,
  Shuffle,
  VolumeHigh,
} from "iconsax-react";

import { useMusicStore } from "@/lib/store/client/music";
import { useEffect, useRef, useState } from "react";

import { Input } from "../ui/input";
import { formatDuration } from "@/lib/utils";

export default function Playbar() {
  const { currentMusic } = useMusicStore();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const intervalRef = useRef<any>({});
  const isReady = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<number>(0);

  // Destructure for conciseness
  const duration = audioRef.current?.duration || 0;

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current && audioRef.current) {
      // Clear any timers already running
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (audioRef.current?.ended) {
          // toNextTrack();
        } else {
          // setTrackProgress(audioRef.current.currentTime);
          setCurrentTime(audioRef.current?.currentTime || 0);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();

    audioRef.current = new Audio(currentMusic?.song);
    setCurrentTime(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentMusic]);

  return (
    <div className="fixed bottom-0 w-[calc(100vw_-_260px)] h-[108px] bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex h-full gap-5 items-center justify-start px-5">
            <Image
              width={64}
              height={64}
              className="rounded-lg"
              alt="song"
              src={currentMusic?.image || ""}
            />
            <div className="flex flex-col gap-1 items-start">
              <div className="text-sm text-gray-300 font-medium">
                {currentMusic?.name}
              </div>
              <div className="text-xs text-textPrimary">
                {currentMusic?.artist}
              </div>
            </div>
            <Heart className="cursor-pointer" size={20} color="white" />
          </div>
        </div>
        <div className="col-span-6">
          <audio hidden ref={audioRef} />
          <div className="flex h-full flex-col gap-5 items-center justify-center">
            <div className="flex items-center gap-6">
              <Shuffle className="cursor-pointer" size={20} color="gray" />
              <Previous className="cursor-pointer" size={20} color="#919693" />
              <div
                onClick={() => setIsPlaying((prev) => !prev)}
                className="cursor-pointer"
              >
                {isPlaying ? (
                  <PauseCircle color="white" size={36} variant="Bulk" />
                ) : (
                  <PlayCircle color="white" size={36} variant="Bulk" />
                )}
              </div>
              <Next className="cursor-pointer" size={20} color="#919693" />
              <RepeateOne
                className="cursor-pointer"
                size={20}
                color="#919693"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-3">
              <div className="text-xs text-textSecondary">
                {formatDuration(currentTime)}
              </div>

              <Input
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => {
                  console.log("hit");
                }}
                type="range"
                className=" in-range:border-r in-range:border-r-emerald-400"
              />
              <div className="text-xs text-textSecondary">
                {formatDuration(duration)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-3 flex items-center justify-center">
          <div className="w-full flex items-center justify-end gap-3">
            <VolumeHigh size={18} color="white" />
            {/* <Slider
              onClick={(e) => {
                console.log(e);
              }}
              className="w-3/6"
            /> */}
            <Input type="range" />
          </div>
        </div>
      </div>
    </div>
  );
}
