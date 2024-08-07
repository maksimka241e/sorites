import { createContext, useContext, useState } from 'react'

import { useDispatch } from 'react-redux'

import { user } from '../api/user'
import { DeleteCart, DeleteFavourites, ShoppinCart, ShoppinFavourites } from '../hooks/postsSlise'
import supabase from '../supabase'

const StoryRepositoryContext = createContext()

function StoryRepositoryProvider({ children }) {
  const [basket, SetBasket] = useState([])
  const [favourites, SetFavourites] = useState([])
  const [oneProducts, SetOneProducts] = useState([])
  const [twoProducts, SetTwoProducts] = useState([])
  const [gallery, setGallery] = useState([])
  const dispatch = useDispatch()

  async function getOneProducts() {
    const { data } = await supabase.from('products').select().eq('type', 1)
    SetOneProducts(data)
  }

  async function getTwoProducts() {
    const { data } = await supabase.from('products').select().eq('type', 2)
    SetTwoProducts(data)
  }

  async function getGallery() {
    const { data } = await supabase.from('gallery').select()
    setGallery(data)
  }

  async function getBaskets() {
    const { data } = await supabase.from('basket').select().eq('email', user.user.email)
    SetBasket(data)
  }

  async function getFavourites() {
    const { data } = await supabase.from('favourites').select().eq('email', user.user.email)
    SetFavourites(data)
  }

  function AddItemfavorites(item) {
    dispatch(ShoppinFavourites(item))
  }

  function AddItemBasket(item) {
    dispatch(ShoppinCart(item))
  }

  function DeleteItemBasket(id) {
    dispatch(DeleteCart(id))
  }

  function DeleteItemFavourites(id) {
    dispatch(DeleteFavourites(id))
  }

  return (
    <StoryRepositoryContext.Provider
      value={{
        basket,
        oneProducts,
        twoProducts,
        gallery,
        favourites,
        getBaskets,
        getOneProducts,
        getTwoProducts,
        getGallery,
        getFavourites,
        AddItemfavorites,
        AddItemBasket,
        DeleteItemBasket,
        DeleteItemFavourites,
      }}
    >
      {children}
    </StoryRepositoryContext.Provider>
  )
}

function useStoryRepository() {
  return useContext(StoryRepositoryContext)
}

export { StoryRepositoryProvider, useStoryRepository }
