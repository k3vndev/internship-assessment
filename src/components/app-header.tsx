'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CartIcon, SearchIcon } from './icons'

export const AppHeader = () => {
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = isOnTop ? 'bg-black' : 'bg-black/85'

  return (
    <header
      className={`flex justify-between items-center px-(--app-px) fixed w-screen z-50 top-0 left-0 py-5 ${bgColor} backdrop-blur-md transition duration-500 border-b border-gray-800`}
    >
      <Link href='/' className='flex items-center gap-2'>
        <Image
          className='size-12 brightness-0 invert'
          src='/shopping-cart.webp'
          alt='Shopping Cart'
          width={50}
          height={50}
        />

        <div className='flex flex-col gap-0 items-start'>
          <h1 className='text-2xl font-semibold text-center font-poppins'>Kevin's Store</h1>
          <p className='text-center text-base text-white/70 -mt-1'>Your one-stop shop for everything!</p>
        </div>
      </Link>

      <label className='flex items-center gap-2 border border-gray-500 focus-within:border-gray-200 transition rounded-full px-4 h-12 w-full max-w-md absolute top-1/2 left-1/2 -translate-1/2 group'>
        <SearchIcon className='size-5 text-gray-400 group-focus-within:text-gray-200 transition' />
        <input
          type='text'
          placeholder='Search products...'
          className='outline-none placeholder:text-gray-400'
        />
      </label>

      <button className='button p-1'>
        <CartIcon className='size-8' />
      </button>
    </header>
  )
}
