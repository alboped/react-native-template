import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 0,
  user: { name: '12' },
  addCount: () => set((state) => ({ count: state.count + 1 })),
  cleanCount: () => set({ count: 0 }),
  setUser: (user) => set(() => ({ user })),
}));
