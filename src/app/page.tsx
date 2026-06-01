'use client'

import { Hero, ProductTile } from '@components'
import type { Product } from '@types'
import { useEffect, useState } from 'react'
import MOCK_PRODUCTS from '../MOCK-PRODUCTS.json'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchData = async () => {
    try {
      // const response = await fetch('https://dummyjson.com/products?limit=10&sortBy=rating&order=desc')
      // const { products } = await response.json()
      await new Promise(resolve => setTimeout(resolve, 0)) // Simulate network delay
      setProducts(MOCK_PRODUCTS as Product[])
    } catch (error) {
      // TODO: Handle error state in UI
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Hero />

      <section className='px-(--app-px) flex flex-col gap-8 py-12 bg-mauve-300'>
        <h3 className='text-8xl font-bold -tracking-widest'>PRODUCTS</h3>
        <ul className='grid grid-cols-5 gap-4'>
          {products?.map(product => (
            <ProductTile key={product.id} {...product} />
          ))}
        </ul>
      </section>
    </>
  )
}
