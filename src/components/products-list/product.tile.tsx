'use client'

import { useGlobalStore } from '@store'
import type { Product } from '@types'
import Image from 'next/image'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { CartAddIcon, CartCheckedIcon, StarIcon } from '../icons'

export const ProductTile = (product: Product) => {
  const { id, title, description, price, rating, images } = product
  const cart = useGlobalStore(s => s.cart)
  const addToCart = useGlobalStore(s => s.addToCart)

  const isAdded = useMemo(() => cart.some(cartProduct => cartProduct.id === id), [cart, id])

  const imgSize = 500

  return (
    <li className='p-6 flex flex-col items-center bg-gray-900 rounded-xl gap-2'>
      {images.length > 0 && (
        <Image
          src={images[0]}
          alt={title}
          width={imgSize}
          height={imgSize}
          draggable={false}
          className='rounded-lg w-32 h-32'
        />
      )}

      <div className='flex flex-col items-start'>
        <h2 className='text-lg font-bold mb-2 font-poppins line-clamp-1'>{title}</h2>
        <p className='text-sm text-white/60 line-clamp-2 mb-5'>{description}</p>

        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <small className='text-2xl font-poppins font-semibold'>${price}</small>
            <small className='text-sm mb-2 text-white/60 flex items-center gap-1'>
              <StarIcon className='size-4 text-yellow-200' />
              {rating}
            </small>
          </div>

          <button
            type='button'
            className={twMerge(
              'p-2 rounded-lg button disabled:scale-100 disabled:brightness-100 [&>svg]:size-8 text-black',
              !isAdded ? 'bg-mauve-200' : 'bg-purple-700'
            )}
            onClick={() => addToCart(product)}
            aria-label={isAdded ? `Remove ${title} from cart` : `Add ${title} to cart`}
            title={isAdded ? `Remove ${title} from cart` : `Add ${title} to cart`}
          >
            {isAdded ? <CartCheckedIcon /> : <CartAddIcon />}
          </button>
        </div>
      </div>
    </li>
  )
}
