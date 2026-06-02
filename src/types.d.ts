export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  brand: string
  weight: number
  images: string[]
}

export interface ProductFilters {
  limit?: number
  sortBy?: keyof Product
  order?: 'asc' | 'desc'
  skip?: number
}
