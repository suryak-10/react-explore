import { create } from 'zustand'

type CountStore = {
    count: number,
    increment: () => void;
    setCount: (value: number) => void;
}

export const useCounterStore = create<CountStore>()((set) => ({
    count: 1,
    increment: () => set(state => ({ count: state.count + 1 })),
    setCount: (value) => set(state => ({ count: value })),
}))