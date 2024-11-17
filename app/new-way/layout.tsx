import React from 'react'
import Link from 'next/link'

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <Link href={'/old-way/counter'}>counter</Link>
            <Link href={'/old-way/display'}>display</Link>
            {children}
        </div>
    )
}

export default template