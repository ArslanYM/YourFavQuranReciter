// src/stores/quranStore.ts
import { create } from 'zustand';

type IsPlayingState = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setAll: (state: Partial<IsPlayingState>) => void;
};

export const useIsPlayingStore = create<IsPlayingState>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setAll: (newState) => set((state) => ({ ...state, ...newState })),
}));