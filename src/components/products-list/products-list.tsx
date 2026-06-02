import type { Product } from '@types'
import { CartOffIcon, CrossIcon, LoadingIcon } from '../icons'
import { ProductTile } from './product.tile'

interface Props {
  products: Product[] | null
  isLoading: boolean
}

export const ProductsList = ({ products, isLoading }: Props) => {
  if (products?.length) {
    return (
      <ul className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {products.map((product, index) => (
          <ProductTile key={product.id} index={index} {...product} />
        ))}
      </ul>
    )
  }

  return (
    <ul className='min-h-full flex flex-col items-center justify-center text-black text-xl gap-2 font-semibold [&>svg]:size-16'>
      {isLoading ? (
        <LoadingIcon className='animate-spin' />
      ) : products === null ? (
        <>
          <CrossIcon />
          Failed to load products.
        </>
      ) : (
        <>
          <CartOffIcon />
          No products found.
        </>
      )}
    </ul>
  )
}
