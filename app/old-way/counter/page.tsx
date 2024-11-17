'use client'
import { useCounterStore } from "@/app/hooks/counter-old-way";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const setCount = useCounterStore(state => state.setCount);
  console.log(count);
  useEffect(() => {
    // setCount(1);
  }, [])
  return (
    <div>
      <h1>The count value is {count}</h1>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
}
