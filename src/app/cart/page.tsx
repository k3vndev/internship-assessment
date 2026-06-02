'use client'

import { ProductsList } from '@components/products-list'
import { useGlobalStore } from '@store'
import { ArrowRightIcon } from '@/components/icons'

export default function CartPage() {
  const cart = useGlobalStore(s => s.cart)

  return (
    <main className='px-(--app-px) mt-24 mb-8 flex flex-col gap-8'>
      <h2 className='lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold -tracking-widest'>CART</h2>
      <ProductsList products={cart} isLoading={false} />

      <button className='flex items-center gap-2 text-white bg-black px-8 py-2 w-fit button'>
        <span className='text-lg font-semibold'>Checkout</span>
        <ArrowRightIcon />
      </button>
    </main>
  )
}
