'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAppStore = create()(
  persist(
    (set) => ({
      isOnboarded: false,
      selectedChain: null,
      setOnboarded: (value) => set({ isOnboarded: value }),
      setSelectedChain: (chain) => set({ selectedChain: chain }),
    }),
    {
      name: 'app-storage',
    }
  )
)

export default useAppStore
