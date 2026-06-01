import Image from 'next/image'
import { ArrowRightIcon } from './icons'

export const Hero = () => {
  const imgSize = 400

  return (
    <section className='px-(--app-px) flex justify-between items-center'>
      <div className='font-poppins flex flex-col justify-center h-160 w-1/2 gap-8'>
        <h2 className='font-bold text-6xl'>The best products at unbeatable prices.</h2>
        <p className='text-2xl text-white/70'>
          Discover a wide range of products, from electronics to fashion, all in one place. Shop now and
          experience the convenience of online shopping with fast delivery and excellent customer service.
        </p>

        <button className='flex items-center gap-2 text-black bg-white px-8 py-2 mt-4 w-fit'>
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
