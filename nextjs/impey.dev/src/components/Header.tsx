import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="max-w-xl mx-auto pt-6 flex items-center justify-between">
       <h1 className="text-2xl font-mono font-bold">impey.dev</h1>
       <nav>
        <ul className='flex flex-row items-center gap-x-4 font-mono'>
            <li className='hover:underline hover:underline-offset-2 hover:text-sky-400'><Link href="">Home</Link></li>
            <li className='hover:underline hover:underline-offset-2 hover:text-sky-400'><Link href="">Blog</Link></li>
            <li className='hover:underline hover:underline-offset-2 hover:text-sky-400'><Link href="">Projects</Link></li>
        </ul>
       </nav>
    </header>
  )
}

export default Header