import { create } from "zustand";
import { ChapterData } from "../Hooks/useCheerio.tsx";

interface iLightNovelInfo {
  title: string | null;
  author: string | null;
}

interface StoreState {
  lightnovelInfo: iLightNovelInfo;
  setLightnovelInfo: (info: iLightNovelInfo) => void;
  chapters: ChapterData[];
  setChapters: (chapters: ChapterData[]) => void;
}

const useStoreChaters = create<StoreState>((set) => ({
  lightnovelInfo: {
    title: null,
    author: null,
  },
  setLightnovelInfo: (lightnovelInfo: iLightNovelInfo) =>
    set({ lightnovelInfo }),
  chapters: [],
  setChapters: (chapters: ChapterData[]) => set({ chapters }),
}));

export default useStoreChaters;
