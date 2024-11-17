"use client"
import React from 'react'
import { useCounterStore } from '../hooks/counter';

const page = () => {
    const count = useCounterStore(state => state.count);
    const increment = useCounterStore(state => state.increment);

    return (
        <div>
            <button onClick={() => increment()}>increment</button>
            this page is also shows the count and it's  value is {count}
        </div>
    )
}

export default page