import { useEffect, useRef, useState } from "react";
import { useMusicStore } from "../store/client/music";

export default function useMusic() {
  const { currentMusic } = useMusicStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const intervalRef = useRef<any>({});
  const isReady = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);

  // Destructure for conciseness
  const duration = audioRef.current?.duration || 0;

  const onTrackChange = (value: number) => {
    if (!audioRef.current?.currentTime) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const onTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const onVolumeChange = (value: number) => {
    if (!audioRef.current) return;
    setVolume(value);
    audioRef.current.volume = value;
  };

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

  return {
    audioRef,
    currentMusic,
    currentTime,
    duration,
    volume,
    onTrackChange,
    onVolumeChange,
    onTogglePlay,
    isPlaying,
  };
}
