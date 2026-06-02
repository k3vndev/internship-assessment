'use client'

import { ProductsList } from '@components/products-list'
import type { ProductFilters } from '@types'
import { useState } from 'react'

export default function SearchPage() {
  const [filters, setFilters] = useState<ProductFilters>({
    limit: 20,
    sortBy: 'rating',
    order: 'desc'
  })

  return (
    <main className='px-(--app-px) mt-48 mb-16'>
      <ProductsList filters={filters} />
    </main>
  )
}
