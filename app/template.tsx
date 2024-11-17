import React from 'react'
import Link from 'next/link'

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <section>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link href={'/counter'}>Counter</Link>
                    <Link href={'/'}>Home</Link>
                </div>
            </section>
            {children}
        </main>
    )
}

export default template