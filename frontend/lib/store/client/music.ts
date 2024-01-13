import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { SelectMusic } from "../server/music/types";

interface MusicStore {
  musics: SelectMusic[];
  currentMusic?: SelectMusic;
  setCurrentMusic: (music: SelectMusic) => void;
}

const musicStore = create<MusicStore>((set) => ({
  musics: [],
  currentMusic: undefined,
  setCurrentMusic: (music) => set((state) => ({ currentMusic: music })),
}));

export const useMusicStore = () => {
  const { musics, currentMusic, setCurrentMusic } = musicStore(
    useShallow((state) => ({
      musics: state.musics,
      currentMusic: state.currentMusic,
      setCurrentMusic: state.setCurrentMusic,
    }))
  );
  return {
    musics,
    currentMusic,
    setCurrentMusic,
  };
};
