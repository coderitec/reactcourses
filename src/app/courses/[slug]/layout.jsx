import Categories from '@/app/components/Categories'
import React from 'react'

export default function layout({children}) {
  return (
    <section className='flex'>
        <Categories />
        {children}
    </section>
  )
}
