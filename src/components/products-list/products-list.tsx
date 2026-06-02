import type { CATEGORIES } from '@consts'
import type { Product, ProductFilters } from '@types'
import { fetchProducts } from '@utils'
import { useEffect, useState } from 'react'
import { ProductTile } from './product.tile'

interface Props {
  filters?: ProductFilters
  category?: (typeof CATEGORIES)[number]
}

export const ProductsList = ({ filters, category }: Props) => {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    const fetchedProducts = await fetchProducts({ filters, category })
    setProducts(fetchedProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [filters, category])

  return (
    <ul className='grid grid-cols-5 gap-4'>
      {products ? (
        products.map(product => <ProductTile key={product.id} {...product} />)
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>No products found.</p>
      )}
    </ul>
  )
}
