import { CounterProvider, useCounterStore } from '@/app/hooks/counter-new-way'
import React, { PropsWithChildren } from 'react'

const Counter = ({ initialCount }: { initialCount: number }) => {
    return (
        <CounterProvider initialCount={initialCount}>
            <div>
                <CounterDisaply />
                <CounterIncrementButton />
            </div>
        </CounterProvider>
    )
}

export default Counter


const CounterDisaply = () => {
    const count = useCounterStore(state => state.count);
    return <h6>The count is {count}</h6>
}

const CounterIncrementButton = () => {
    const increment = useCounterStore(state => state.increment);
    return <button onClick={increment}>increment</button>
}