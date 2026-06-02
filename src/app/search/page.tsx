'use client'

import { ProductsList } from '@components/products-list'
import { useFetchProducts } from '@hooks'
import { useGlobalStore } from '@store'
import type { ProductFilters } from '@types'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState } from 'react'

const initialFilters: ProductFilters = {
  limit: 20,
  sortBy: 'rating',
  order: 'desc'
}

const SearchPageContent = () => {
  const searchParams = useSearchParams()
  const storeFilters = useGlobalStore(s => s.filters)
  const searchBar = useGlobalStore(s => s.searchBar)
  const setSearchBar = useGlobalStore(s => s.setSearchBar)

  const [searchFromUrl, setSearchFromUrl] = useState(searchParams.get('q') || '')

  // Extract search query from URL on initial render and set it in the global store
  useEffect(() => {
    if (searchFromUrl) {
      setSearchBar(searchFromUrl)
      setSearchFromUrl('') // Clear local state after syncing with global store
    }
  }, [])

  // Add filters to url query parameters for shareable links
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchBar) {
      params.set('q', searchBar)
    }
    if (storeFilters) {
      for (const [key, value] of Object.entries(storeFilters)) {
        if (value !== undefined) {
          params.set(key, String(value))
        }
      }
    }

    // Update the URL without reloading the page
    const queryString = params.toString()
    let newUrl = '/search'
    if (queryString) {
      newUrl += `?${queryString}`
    }
    window.history.replaceState(null, '', newUrl)
  }, [storeFilters, searchBar])

  const filters: ProductFilters = useMemo(() => ({ ...initialFilters, ...storeFilters }), [storeFilters])

  const { products, isLoading } = useFetchProducts({ filters, searchBar: searchFromUrl || searchBar })

  return (
    <main className='px-(--app-px) mt-48 mb-16'>
      <ProductsList products={products} isLoading={isLoading} />
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<main className='px-(--app-px) mt-48 mb-16'>Loading search...</main>}>
      <SearchPageContent />
    </Suspense>
  )
}
