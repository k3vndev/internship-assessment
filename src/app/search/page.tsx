'use client'

import { ProductsList } from '@components/products-list'
import { CATEGORIES } from '@consts'
import { useFetchProducts } from '@hooks'
import { useGlobalStore } from '@store'
import type { ProductFilters } from '@types'
import { parseFromKebab } from '@utils'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CrossIcon } from '@/components'

const initialFilters: ProductFilters = {
  limit: 20,
  sortBy: 'rating',
  order: 'desc'
}

const SearchPageContent = () => {
  const searchParams = useSearchParams()
  const storeFilters = useGlobalStore(s => s.filters)
  const storeCategory = useGlobalStore(s => s.category)
  const setStoreCategory = useGlobalStore(s => s.setCategory)
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

  const selectCategory = (category: (typeof CATEGORIES)[number]) => {
    setStoreCategory(category)
    setSearchBar('') // Clear search bar when selecting a category
  }

  const filters: ProductFilters = useMemo(() => ({ ...initialFilters, ...storeFilters }), [storeFilters])

  const { products, isLoading } = useFetchProducts({
    filters,
    searchBar: searchFromUrl || searchBar,
    category: storeCategory
  })

  return (
    <main className='px-(--app-px) mt-40 mb-16 flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl text-black font-poppins font-semibold flex items-center gap-2'>
          <span>Categories</span>
          {storeCategory && (
            <button
              className='button'
              onClick={() => setStoreCategory(undefined)}
              aria-label='Clear category filter'
              title='Clear category filter'
            >
              <CrossIcon />
            </button>
          )}
        </h2>

        <ul className='flex flex-wrap gap-2'>
          {CATEGORIES.map(category => (
            <li key={category}>
              <button
                type='button'
                className={twMerge(
                  'px-4 py-2 rounded-lg bg-gray-900 text-white button',
                  storeCategory === category && 'bg-gray-500'
                )}
                onClick={() => selectCategory(category)}
              >
                {parseFromKebab(category)}
              </button>
            </li>
          ))}
        </ul>
      </div>

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
