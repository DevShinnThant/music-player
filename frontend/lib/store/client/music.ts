import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { SelectMusic } from "../server/music/types";

interface MusicStore {
  musics: SelectMusic[];
  insertMusics: (musics: SelectMusic[]) => void;
  currentMusicIndex: number | null;
  setCurrentMusic: (index: number) => void;
}

const musicStore = create<MusicStore>((set) => ({
  musics: [],
  insertMusics: (musics) => set((state) => ({ musics })),
  currentMusicIndex: null,
  setCurrentMusic: (index) => set((state) => ({ currentMusicIndex: index })),
}));

export const useMusicStore = () => {
  const { musics, insertMusics, currentMusicIndex, setCurrentMusic } =
    musicStore(
      useShallow((state) => ({
        musics: state.musics,
        insertMusics: state.insertMusics,
        currentMusicIndex: state.currentMusicIndex,
        setCurrentMusic: state.setCurrentMusic,
      }))
    );
  return {
    musics,
    insertMusics,
    currentMusicIndex,
    setCurrentMusic,
  };
};
