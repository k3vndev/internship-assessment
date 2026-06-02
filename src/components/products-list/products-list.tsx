import type { Product } from '@types'
import { CrossIcon, LoadingIcon } from '../icons'
import { ProductTile } from './product.tile'

interface Props {
  products: Product[] | null
  isLoading: boolean
}

export const ProductsList = ({ products, isLoading }: Props) => {
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
