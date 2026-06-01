import type { Product } from '@types'
import Image from 'next/image'

export const ProductTile = ({ title, description, price, rating, images }: Product) => {
  const imgSize = 500

  return (
    <li className='border rounded-lg p-4 flex flex-col items-center'>
      {images.length > 0 && (
        <Image
          src={images[0]}
          alt={title}
          width={imgSize}
          height={imgSize}
          className='rounded-lg w-32 h-32'
        />
      )}

      <h2 className='text-lg font-bold mb-2'>{title}</h2>
      <p className='text-sm mb-2'>{description}</p>
      <p className='text-md font-semibold mb-2'>${price}</p>
      <p className='text-sm mb-2'>Rating: {rating}</p>
    </li>
  )
}
