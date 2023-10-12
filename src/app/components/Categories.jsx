import Link from 'next/link'
import React from 'react'

export default function Categories() {
  return (
    <header>
        <ul className='flex flex-col min-h-screen bg-slate-400 uppercase text-2xl px-5 fixed gap-y-6'>
            <Link href='/courses/html'>
            <li>html</li>
            </Link>

            <Link href='/courses/git'>
            <li>git</li>
            </Link>

            <Link href='/courses/css'>
            <li>CSS</li>
            </Link>

            <Link href='/courses/tailwind'>
            <li>tailwindcss</li>
            </Link>

            <Link href='/courses/js'>
            <li>javascript</li>
            </Link>

            <Link href='/courses/react'>
            <li>react</li>
            </Link>

        </ul>
    </header>
  )
}
