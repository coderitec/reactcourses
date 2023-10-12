import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center bg-blue-600 text-white py-6'>
        <span>Coderite </span>
        &copy;{new Date().getFullYear()}
    </footer>
  )
}
