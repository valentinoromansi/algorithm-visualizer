import { create } from 'zustand'

export interface AppState {
  bears: number
  increaseBears: () => void
}

export const useBearStore = create<AppState>((set) => ({
  bears: 2,
  increaseBears: () => set((state: AppState) => ({ bears: state.bears + 1 }))
}))