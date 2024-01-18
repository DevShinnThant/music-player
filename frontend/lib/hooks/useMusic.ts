import { usePrevious } from "@/lib/hooks/usePrevious";
import { useEffect, useRef, useState } from "react";
import { useMusicStore } from "../store/client/music";

export default function useMusic() {
  const { currentMusicId, musics, setCurrentMusic, isPlaying, togglePlay } =
    useMusicStore();

  const currentMusic = musics.find((music) => music.id === currentMusicId);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const intervalRef = useRef<any>({});
  const isReady = useRef<boolean>(false);

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

  const onVolumeChange = (value: number) => {
    if (!audioRef.current) return;
    setVolume(value);
    audioRef.current.volume = value;
  };

  const onNextChange = () => {
    const indexOfCurrentMusic = musics.findIndex(
      (music) => music.id === currentMusicId
    );
    if (currentMusicId === null || musics.length - 1 === indexOfCurrentMusic)
      return;

    const nextSongId = musics[indexOfCurrentMusic + 1].id;

    setCurrentMusic(nextSongId);
  };

  const onPreviousChange = () => {
    const indexOfCurrentMusic = musics.findIndex(
      (music) => music.id === currentMusicId
    );
    if (currentMusicId === null || indexOfCurrentMusic === 0) return;

    const previousSongId = musics[indexOfCurrentMusic - 1].id;
    setCurrentMusic(previousSongId);
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

  const previousSongId = usePrevious(currentMusicId);
  useEffect(() => {
    if (!previousSongId) return;
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
      // play();
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentMusic?.id]);

  return {
    audioRef,
    currentMusic,
    currentTime,
    duration,
    volume,
    onTrackChange,
    onVolumeChange,
    isPlaying,
    onNextChange,
    onPreviousChange,
    onRepeatedToggle,
    isRepeated,
    isShuffleMode,
    onShuffleToggle,
    togglePlay,
  };
}
