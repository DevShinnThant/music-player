import { create } from "zustand";

import { SelectMusic } from "../server/music/types";

interface MusicStore {
  musics: SelectMusic[];
  insertMusics: (musics: SelectMusic[]) => void;
  currentMusicId: number | null;
  currentAlbumId: number | null;
  setCurrentAlbum: (id: number | null) => void;
  setCurrentMusic: (id: number | null) => void;
  isPlaying: boolean;
  togglePlay: () => void;
}

const musicStore = create<MusicStore>((set) => ({
  isPlaying: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  musics: [],
  insertMusics: (musics) => set((state) => ({ musics })),
  currentMusicId: null,
  currentAlbumId: null,
  setCurrentAlbum: (id) => set(() => ({ currentAlbumId: id })),
  setCurrentMusic: (id) =>
    set((state) => ({ currentMusicId: id, isPlaying: true })),
}));

export const useMusicStore = () => {
  const {
    isPlaying,
    togglePlay,
    musics,
    insertMusics,
    currentMusicId,
    setCurrentMusic,
    currentAlbumId,
    setCurrentAlbum,
  } = musicStore((state) => ({
    isPlaying: state.isPlaying,
    togglePlay: state.togglePlay,
    musics: state.musics,
    insertMusics: state.insertMusics,
    currentMusicId: state.currentMusicId,
    setCurrentMusic: state.setCurrentMusic,
    currentAlbumId: state.currentAlbumId,
    setCurrentAlbum: state.setCurrentAlbum,
  }));
  return {
    isPlaying,
    togglePlay,
    musics,
    insertMusics,
    currentMusicId,
    setCurrentMusic,
    currentAlbumId,
    setCurrentAlbum,
  };
};
