import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { createStore } from 'zustand';
import { create, StoreApi, useStore } from 'zustand'

type CountStore = {
    count: number,
    increment: () => void;
    setCount: (value: number) => void;
}

// export const useCounterStore = create<CounterStore>()()

const CountContext = createContext<StoreApi<CountStore> | undefined>(undefined);

type CounterProviderProps = PropsWithChildren & {
    initialCount: number,
}

export const CounterProvider = ({ initialCount, children }: CounterProviderProps) => {
    const [store] = useState(() => createStore<CountStore>((set) => ({
        count: initialCount,
        increment: () => set(state => ({ count: state.count + 1 })),
        setCount: (value) => set(state => ({ count: value })),
    })))
    return <CountContext.Provider value={store}>{children}</CountContext.Provider>
}


export  function useCounterStore<T>(selector: (state: CountStore) => T) {
    const context = useContext(CountContext);
    if(!context){
        throw new Error(`CounterProvider wrapping is missing!`);
    }
    return useStore(context, selector);
}