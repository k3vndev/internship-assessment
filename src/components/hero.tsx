import Image from 'next/image'
import Link from 'next/link'
import { GradientBlursBg } from './gradient-blurs-bg'
import { ArrowRightIcon } from './icons'

export const Hero = () => {
  const imgSize = 400

  return (
    <section className='relative overflow-hidden px-(--app-px) flex not-lg:flex-col-reverse justify-between items-center bg-mauve-100 lg:pb-40 pb-20 lg:pt-60 pt-32'>
      <GradientBlursBg />

      <div className='relative z-10 font-poppins flex flex-col justify-center not-lg:items-center not-lg:text-center lg:w-2/3 gap-8'>
        <h2 className='font-bold lg:text-7xl text-5xl text-black *:text-gradient'>
          The best <span>products</span> at <span>unbeatable prices</span>.
        </h2>
        <p className='lg:text-4xl text-2xl text-pretty text-black/70'>
          Discover a wide range of products, from electronics to fashion, all in one place.
        </p>

        <Link href='/search' className='flex items-center gap-2 text-white bg-black px-8 py-2 w-fit button'>
          <span className='text-lg font-semibold'>Shop Now</span>
          <ArrowRightIcon />
        </Link>
      </div>

      <Image
        src='/shopping-cart.webp'
        alt='Shopping Cart'
        width={imgSize}
        height={imgSize}
        className='relative z-10 object-contain lg:size-100 size-72'
        draggable={false}
      />
    </section>
  )
}
