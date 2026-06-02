'use client'

import { CATEGORIES } from '@consts'
import { parseFromKebab } from '@utils'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CrossIcon } from './icons'

type Category = (typeof CATEGORIES)[number]

type CategoriesAccordionProps = {
  selectedCategory?: Category
  onSelectCategory: (category: Category) => void
  onClearCategory: () => void
}

export const CategoriesAccordion = ({
  selectedCategory,
  onSelectCategory,
  onClearCategory
}: CategoriesAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center justify-between gap-4'>
        <h2 className='text-2xl text-black font-poppins font-semibold flex items-center gap-2'>
          <span>Categories</span>
          {selectedCategory && (
            <button
              type='button'
              className='button'
              onClick={onClearCategory}
              aria-label='Clear category filter'
              title='Clear category filter'
            >
              <CrossIcon />
            </button>
          )}
        </h2>

        <button
          type='button'
          className='button rounded-full border border-gray-900 px-8 py-2 text-gray-900 font-semibold'
          aria-expanded={isOpen}
          aria-controls='categories-accordion-content'
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? 'Hide categories' : 'Show categories'}
        </button>
      </div>

      {isOpen && (
        <ul id='categories-accordion-content' className='flex flex-wrap gap-2'>
          {CATEGORIES.map(category => (
            <li key={category}>
              <button
                type='button'
                className={twMerge(
                  'px-4 border border-transparent py-2 rounded-lg bg-gray-900 text-white button',
                  selectedCategory === category &&
                    'border-gray-900 bg-transparent text-gray-900 font-semibold'
                )}
                onClick={() => onSelectCategory(category)}
              >
                {parseFromKebab(category)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
