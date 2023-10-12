import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='fixed left-0 right-0 z-10'>
        <ul className='flex justify-between px-4 items-center h-[100px] bg-blue-700 text-white'>
            <Link href='/'>
            <li>Home</li>
            </Link>

            <Link href='/courses'>
            <li>Courses</li>
            </Link>

            <Link href='/about'>
            <li>About </li>
            </Link>

            <Link href='/contact'>
            <li>Contact </li>
            </Link>

        </ul>
    </nav>
  )
}
