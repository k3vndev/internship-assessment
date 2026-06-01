import { CartIcon, SearchIcon } from './icons'

export const Hero = () => {
  return (
    <section>
      <header className='flex justify-between items-center px-(--app-px) relative'>
        <div className='flex flex-col gap-1 items-start'>
          <h1 className='text-4xl font-bold text-center'>Kevin's Store</h1>
          <p className='text-center text-lg text-gray-600'>Your one-stop shop for everything!</p>
        </div>

        <label className='flex items-center gap-2 border border-gray-300 rounded-full px-4 h-12 w-full max-w-md absolute top-1/2 left-1/2 transform -translate-1/2'>
          <SearchIcon className='size-5 text-gray-400' />
          <input type='text' placeholder='Search products...' className='outline-none' />
        </label>

        <button>
          <CartIcon />
        </button>
      </header>
    </section>
  )
}
