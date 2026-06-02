'use client'

import { useGlobalStore } from '@store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CartIcon } from '../icons'
import { SearchBar } from './search-bar'

export const AppHeader = () => {
  const [isOnTop, setIsOnTop] = useState(true)
  const cartItems = useGlobalStore(s => s.cart)

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
      className={`flex justify-between items-center px-(--app-px) fixed w-screen z-50 top-0 left-0 py-5 gap-4 ${bgColor} backdrop-blur-md transition duration-500 border-b border-gray-800`}
    >
      <Link href='/' className='flex items-center gap-2'>
        <Image
          className='size-12 brightness-0 invert not-sm:hidden'
          src='/shopping-cart.webp'
          alt='Shopping Cart'
          width={50}
          height={50}
        />

        <div className='flex flex-col gap-0 items-start not-lg:hidden'>
          <h1 className='text-2xl font-semibold text-center font-poppins'>Kevin's Store</h1>
          <p className='text-center text-base text-white/70 -mt-1'>Your one-stop shop for everything!</p>
        </div>
      </Link>

      <SearchBar />

      <Link href='/cart' className='button p-1 relative'>
        <CartIcon className='size-8' />
        {cartItems.length > 0 && (
          <span className='absolute bg-purple-800 text-white font-poppins size-5 text-sm font-semibold flex items-center justify-center rounded-full -top-1 -right-1'>
            {cartItems.length}
          </span>
        )}
      </Link>
    </header>
  )
}
