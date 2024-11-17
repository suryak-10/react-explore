"use client"
import React from 'react'
import Counter from '../_components/Counter'
import { CounterProvider } from '@/app/hooks/counter-new-way'

const page = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(int => <Counter key={int} initialCount={int} />)}
    </div>
  )
}

export default page