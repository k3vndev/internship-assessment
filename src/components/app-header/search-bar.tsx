'use client'

import { useGlobalStore } from '@store'
import { usePathname, useRouter } from 'next/navigation'
import { CrossIcon, SearchIcon } from '../icons'

export const SearchBar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const searchBar = useGlobalStore(s => s.searchBar)
  const setSearchBar = useGlobalStore(s => s.setSearchBar)

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    const targetPathname = '/search'

    if (pathname === targetPathname) {
      return
    }

    const params = new URLSearchParams()
    const query = searchBar.trim()

    if (query) {
      params.set('q', query)
    }

    const searchUrl = params.size ? `${targetPathname}?${params.toString()}` : targetPathname
    router.push(searchUrl)
  }

  const handleClearSearch = () => {
    setSearchBar('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed:', e.target.value)
    setSearchBar(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-2 border border-gray-600 focus-within:border-gray-300 transition rounded-full h-12 w-full max-w-md xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-1/2 group overflow-clip'
    >
      <SearchIcon className='size-5 shrink-0 text-zinc-600 transition ml-4' />
      <input
        type='text'
        placeholder='Search products...'
        value={searchBar}
        onChange={handleChange}
        className='outline-none placeholder:text-gray-400 bg-transparent flex-1 min-w-0 w-full'
      />

      <div className='flex items-center gap-1 h-full'>
        <button
          type='button'
          onClick={handleClearSearch}
          className='button p-1 text-gray-300 disabled:text-gray-500'
          aria-label='Clear search'
          disabled={!searchBar}
        >
          <CrossIcon className='size-5' />
        </button>

        <button
          type='submit'
          className='button h-full bg-white/10 group-focus-within:bg-white/20 transition border-l group border-gray-600 group-focus-within:border-gray-300 text-gray-300 px-4'
          aria-label='Search'
        >
          <SearchIcon className='size-5' />
        </button>
      </div>
    </form>
  )
}
