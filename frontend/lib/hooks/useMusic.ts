import { usePrevious } from "@/lib/hooks/usePrevious";
import { useEffect, useRef, useState } from "react";
import { useMusicStore } from "../store/client/music";

export default function useMusic() {
  const { currentMusicIndex, musics, setCurrentMusic } = useMusicStore();

  const currentMusic = musics[currentMusicIndex!];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const intervalRef = useRef<any>({});
  const isReady = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [isRepeated, setIsRepeated] = useState<boolean>(false);
  const [isShuffleMode, setIsShuffleMode] = useState<boolean>(false);

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

  const onNextChange = () => {
    if (currentMusicIndex === null || musics.length - 1 === currentMusicIndex)
      return;

    setCurrentMusic(currentMusicIndex + 1);
  };

  const onPreviousChange = () => {
    if (!currentMusicIndex) return;
    setCurrentMusic(currentMusicIndex - 1);
  };

  const onRepeatedToggle = () => {
    setIsRepeated((prev) => !prev);
  };

  const onShuffleToggle = () => {
    setIsShuffleMode((prev) => !prev);
  };

  const nextRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * musics.length + 1);
    console.log(randomIndex);

    setCurrentMusic(randomIndex);
  };

  const previousRepeated = usePrevious(isRepeated);
  const previousShuffleMode = usePrevious(isShuffleMode);

  // Prevent Initial Call
  useEffect(() => {
    if (!previousRepeated && !isRepeated) {
      return;
    }
    clearInterval(intervalRef.current);
    startTimer();
  }, [isRepeated]);

  // Prevent Initial Call
  useEffect(() => {
    if (!previousShuffleMode && !isShuffleMode) {
      return;
    }
    clearInterval(intervalRef.current);
    startTimer();
  }, [isShuffleMode]);

  const startTimer = () => {
    if (intervalRef.current && audioRef.current) {
      // Clear any timers already running
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (audioRef.current?.ended) {
          if (isRepeated) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            return;
          }
          if (isShuffleMode) {
            nextRandomSong();
          } else {
            onNextChange();
          }
        } else {
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

  // Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Pause current song, Set new song and Play new song everytime song changes
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
    onNextChange,
    onPreviousChange,
    onRepeatedToggle,
    isRepeated,
    isShuffleMode,
    onShuffleToggle,
  };
}
