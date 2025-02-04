// src/stores/quranStore.ts
import { create } from 'zustand';

type IsLoadingState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setAll: (state: Partial<IsLoadingState>) => void;
};

export const useIsLoadingStore = create<IsLoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setAll: (newState) => set((state) => ({ ...state, ...newState })),
}));