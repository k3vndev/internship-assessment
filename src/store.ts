import type { Product, ProductFilters } from '@types'
import { create } from 'zustand'

interface GlobalStore {
  searchBar: string
  filters: ProductFilters
  cart: Product[]
  setSearchBar: (searchBar: string) => void
  setFilters: (filters: ProductFilters) => void
  setCart: (cart: Product[]) => void
}

export const useGlobalStore = create<GlobalStore>(set => ({
  searchBar: '',
  filters: {},
  cart: [],
  setSearchBar: searchBar => set({ searchBar }),
  setFilters: filters => set({ filters }),
  setCart: cart => set({ cart })
}))
