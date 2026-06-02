'use client'

import { Hero } from '@components'
import { ProductsList } from '@components/products-list'

export default function Home() {
  return (
    <>
      <Hero />

      <section className='px-(--app-px) flex flex-col gap-8 pt-16 pb-28 bg-linear-to-b from-mauve-400 to-mauve-200'>
        <h3 className='text-8xl font-bold -tracking-widest'>PRODUCTS</h3>
        <ProductsList filters={{ order: 'desc', sortBy: 'rating' }} />
      </section>
    </>
  )
}
