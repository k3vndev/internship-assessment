import type { CATEGORIES } from '@consts'
import type { Product, ProductFilters } from '@types'

type Params = {
  filters?: ProductFilters
  category?: (typeof CATEGORIES)[number]
  searchBar?: string
}

export const fetchProducts = async ({ filters, category, searchBar }: Params) => {
  try {
    if (searchBar && category) {
      throw new Error('Search and category filters cannot be used together.')
    }

    const url = new URL('https://dummyjson.com/products')
    const normalizedSearchBar = searchBar?.trim()

    if (normalizedSearchBar) {
      url.pathname += '/search'
      url.searchParams.append('q', normalizedSearchBar)
    }

    // Handle category filtering
    if (category && !normalizedSearchBar) {
      url.pathname += `/category/${category}`
    }

    // Append query parameters for filters
    if (filters) {
      for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined) {
          url.searchParams.append(key, String(value))
        }
      }
    }

    // Ensure a default limit is set if not provided
    if (!filters?.limit) {
      url.searchParams.append('limit', '10')
    }

    // Select only necessary fields to optimize response size
    url.searchParams.append('select', 'id,title,description,category,price,rating,brand,weight,images')

    // Fetch and return products from the API
    const response = await fetch(url.toString())
    const { products } = await response.json()
    return products as Product[]
  } catch {
    return null
  }
}
