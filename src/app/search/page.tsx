'use client'

import { ProductsList } from '@components/products-list'
import { useFetchProducts } from '@hooks'
import { useGlobalStore } from '@store'
import type { ProductFilters } from '@types'
import { useMemo } from 'react'

const initialFilters: ProductFilters = {
  limit: 20,
  sortBy: 'rating',
  order: 'desc'
}

export default function SearchPage() {
  const storeFilters = useGlobalStore(s => s.filters)
  const searchBar = useGlobalStore(s => s.searchBar)

  const filters: ProductFilters = useMemo(
    () => ({
      ...initialFilters,
      ...storeFilters
    }),
    [storeFilters]
  )

  const { products, isLoading } = useFetchProducts({ filters })

  return (
    <main className='px-(--app-px) mt-48 mb-16'>
      <ProductsList products={products} isLoading={isLoading} />
    </main>
  )
}
