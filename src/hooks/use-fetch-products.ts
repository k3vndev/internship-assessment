import type { CATEGORIES } from '@consts'
import type { Product, ProductFilters } from '@types'
import { fetchProducts } from '@utils'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedProducts = await fetchProducts({ filters, category, searchBar })
      setProducts(fetchedProducts)
      setIsLoading(false)
    }

    fetchData()
  }, [filters, category, searchBar])

  return { products, isLoading }
}
