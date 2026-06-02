import type { CATEGORIES } from '@consts'
import type { Product, ProductFilters } from '@types'
import { fetchProducts } from '@utils'
import { useEffect, useState } from 'react'
import { CrossIcon, LoadingIcon } from '../icons'
import { ProductTile } from './product.tile'

interface Props {
  filters?: ProductFilters
  category?: (typeof CATEGORIES)[number]
}

export const ProductsList = ({ filters, category }: Props) => {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setIsLoading(true)
    const fetchedProducts = await fetchProducts({ filters, category })
    setProducts(fetchedProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [filters, category])

  if (products?.length) {
    return (
      <ul className='grid grid-cols-5 gap-4'>
        {products.map(product => (
          <ProductTile key={product.id} {...product} />
        ))}
      </ul>
    )
  }

  return (
    <ul className='min-h-full flex items-center justify-center text-black text-sm [&>svg]:size-16'>
      {isLoading ? (
        <LoadingIcon className='animate-spin' />
      ) : products === null ? (
        <>
          <CrossIcon />
          Failed to load products.
        </>
      ) : (
        'No products found.'
      )}
    </ul>
  )
}
