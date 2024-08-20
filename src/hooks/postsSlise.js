/* eslint-disable import/order */
import { createSlice } from '@reduxjs/toolkit'
import userApi from '../api/user'
import { commonWindowsFalse, commonWindowsTrue } from '../components/common/modalWindows'

const initialState = {
  datesReg: {
    email: '',
    password: '',
  },
  basket: [],
  favourites: [],
  oneProducts: [],
  twoProducts: [],
  gallery: [],
}

export const BasketReducer = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    RegisterUser(type, action) {
      if (action.payload.email.length > 16 && action.payload.password.length > 6) {
        return userApi.register(action.payload)
      } else if (action.payload.email.length === 0 && action.payload.password.length === 0) {
        commonWindowsFalse('Заполните данные')
      }
    },
    LoginUser(type, action) {
      if (action.payload.email.length > 14 && action.payload.password.length > 6) {
        return userApi.login(action.payload)
      } else if (action.payload.email.length === 0 && action.payload.password.length === 0) {
        commonWindowsFalse('Заполните данные')
      }
    },
    LogoutUser(type, action) {
      commonWindowsTrue('Вы вышли из профиля')
      setTimeout(() => document.location.reload(), 2050)
      return userApi.logout()
    },
    SetBasket(state, action) {
      state.basket = action.payload // Обновляем состояние basket
    },
    SetOneProducts(state, action) {
      state.oneProducts = action.payload // Обновляем состояние oneProducts
    },
    SetTwoProducts(state, action) {
      state.twoProducts = action.payload // Обновляем состояние twoProducts
    },
    SetGallery(state, action) {
      state.gallery = action.payload // Обновляем состояние gallery
    },
    SetFavourites(state, action) {
      state.favourites = action.payload // Обновляем состояние gallery
    },
    ShoppinCart(type, action) {
      userApi.shoppinCart(action.payload)
    },
    DeleteCart(state, action) {
      const { id, index } = action.payload
      userApi.deleteCart(id)
      state.basket.splice(index, 1)
      commonWindowsTrue('Товар Удалён')
    },
    ShoppinFavourites(type, action) {
      userApi.shoppinFavourites(action.payload)
    },
    DeleteFavourites(state, action) {
      const { id, index } = action.payload
      userApi.deleteFavourites(id)
      state.favourites.splice(index, 1)
      commonWindowsTrue('Товар Удалён')
    },
  },
})

export const {
  createDates,
  deleteDates,
  RegisterUser,
  LoginUser,
  LogoutUser,
  ShoppinCart,
  SetBasket,
  SetOneProducts,
  SetTwoProducts,
  SetGallery,
  SetFavourites,
  DeleteCart,
  ShoppinFavourites,
  DeleteFavourites,
} = BasketReducer.actions
export const reg = (state) => state.datesReg
export const datesBasket = (state) => state.basket
export const datesOneProducts = (state) => state.oneProducts
export const datesTwoProducts = (state) => state.twoProducts
export const datesGallery = (state) => state.gallery
export const datesFavourites = (state) => state.favourites
