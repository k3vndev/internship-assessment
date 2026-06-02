import type { Product } from '@types'
import Image from 'next/image'
import { CartAddIcon, StarIcon } from '../icons'

export const ProductTile = ({ title, description, price, rating, images }: Product) => {
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

          <button className='bg-mauve-200 p-2 rounded-lg button'>
            <CartAddIcon className='text-black size-8' />
          </button>
        </div>
      </div>
    </li>
  )
}
