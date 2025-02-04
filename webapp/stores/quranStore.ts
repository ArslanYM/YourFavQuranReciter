// src/stores/quranStore.ts
import { create } from 'zustand';

type QuranState = {
  ayatNumber: number;
  surahNumber: number;
  reciterNumber: number;
  setAyat: (ayat: number) => void;
  setSurah: (surah: number) => void;
  setReciter: (reciter: number) => void;
  setAll: (state: Partial<QuranState>) => void;
};

export const useQuranStore = create<QuranState>((set) => ({
  ayatNumber: 1,
  surahNumber: 1,
  reciterNumber: 1,
  setAyat: (ayatNumber) => set({ ayatNumber }),
  setSurah: (surahNumber) => set({ surahNumber }),
  setReciter: (reciterNumber) => set({ reciterNumber }),
  setAll: (newState) => set((state) => ({ ...state, ...newState })),
}));