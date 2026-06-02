'use client'

import { Hero } from '@components'
import { ProductsList } from '@components/products-list'
import { useFetchProducts } from '@hooks'
import type { ProductFilters } from '@types'

const homeFilters: ProductFilters = {
  order: 'desc',
  sortBy: 'rating'
}

export default function Home() {
  const { products, isLoading } = useFetchProducts({ filters: homeFilters })

  return (
    <>
      <Hero />

      <section className='px-(--app-px) flex flex-col gap-8 pt-16 pb-28 bg-linear-to-b from-mauve-400 to-mauve-200'>
        <h3 className='lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold -tracking-widest'>PRODUCTS</h3>
        <ProductsList products={products} isLoading={isLoading} />
      </section>
    </>
  )
}
