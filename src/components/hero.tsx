import Image from 'next/image'
import { ArrowRightIcon } from './icons'

export const Hero = () => {
  const imgSize = 400

  return (
    <section className='px-(--app-px) flex justify-between items-center bg-mauve-100'>
      <div className='font-poppins flex flex-col justify-center pb-48 py-64 w-1/2 gap-8'>
        <h2 className='font-bold text-6xl text-black *:text-gradient'>
          The best <span>products</span> at <span>unbeatable prices</span>.
        </h2>
        <p className='text-3xl text-pretty text-black/70'>
          Discover a wide range of products, from electronics to fashion, all in one place.
        </p>

        <button className='flex items-center gap-2 text-white bg-black px-8 py-2 w-fit button'>
          <span className='text-lg font-semibold'>Shop Now</span>
          <ArrowRightIcon />
        </button>
      </div>

      <Image
        src='/shopping-cart.webp'
        alt='Shopping Cart'
        width={imgSize}
        height={imgSize}
        className='object-contain'
      />
    </section>
  )
}
