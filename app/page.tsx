'use client'
import Image from "next/image";
import { useCounterStore } from "./hooks/counter";

export default function Home() {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  return (
    <div>
      <h1>The count value is {count}</h1>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
}
