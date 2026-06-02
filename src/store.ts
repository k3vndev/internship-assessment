import type { Product, ProductFilters } from '@types'
import { create } from 'zustand'
import type { CATEGORIES } from './consts'

interface GlobalStore {
  searchBar: string
  filters: ProductFilters
  cart: Product[]
  category?: (typeof CATEGORIES)[number]
  setSearchBar: (searchBar: string) => void
  setFilters: (filters: ProductFilters) => void
  setCart: (cart: Product[]) => void
  setCategory: (category: GlobalStore['category']) => void
  addToCart: (product: Product) => void
}

export const useGlobalStore = create<GlobalStore>(set => ({
  searchBar: '',
  filters: {},
  cart: [],
  setSearchBar: searchBar =>
    set(() => {
      console.log({ searchBar })
      return { searchBar }
    }),
  setFilters: filters => set({ filters }),
  setCart: cart => set({ cart }),
  addToCart: product =>
    set(state => {
      const isAdded = state.cart.some(cartProduct => cartProduct.id === product.id)

      if (isAdded) {
        return {
          cart: state.cart.filter(cartProduct => cartProduct.id !== product.id)
        }
      }

      return {
        cart: [...state.cart, product]
      }
    }),
  setCategory: category => set({ category })
}))
