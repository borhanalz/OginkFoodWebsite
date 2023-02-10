import React from 'react'
import BigNav from './BigNav'
import TinyNav from './TinyNav'

export default function Header() {
  return (
      <header className='mt-4'>
            <BigNav/>
            <TinyNav/>
      </header>
  )
}
