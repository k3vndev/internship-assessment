import type { CATEGORIES } from '@consts'
import type { Product, ProductFilters } from '@types'
import { fetchProducts } from '@utils'
import { useEffect, useState } from 'react'
import { useDebounce } from './use-debounce'

interface UseFetchProductsParams {
  filters?: ProductFilters
  category?: (typeof CATEGORIES)[number]
  searchBar?: string
}

interface UseFetchProductsReturn {
  products: Product[] | null
  isLoading: boolean
}

export const useFetchProducts = ({
  filters,
  category,
  searchBar
}: UseFetchProductsParams): UseFetchProductsReturn => {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const debouncedSearchBar = useDebounce(searchBar, 300)

  // Fetch products when filters, category, or searchBar changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedProducts = await fetchProducts({ filters, category, searchBar: debouncedSearchBar })
      setProducts(fetchedProducts)
      setIsLoading(false)
    }
    fetchData()
  }, [filters, category, debouncedSearchBar])

  return { products, isLoading }
}
