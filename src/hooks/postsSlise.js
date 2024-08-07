/* eslint-disable import/order */
import { createSlice } from '@reduxjs/toolkit'
import userApi, { user } from '../api/user'

export const BasketReducer = createSlice({
  name: 'Basket',
  initialState: {
    datesReg: {
      email: '',
      password: '',
    },
  },
  reducers: {
    RegisterUser(type, action) {
      if (action.payload.email.length > 16 && action.payload.password.length > 6) {
        return userApi.register(action.payload)
      } else if (action.payload.email.length === 0 && action.payload.password.length === 0) {
        alert('пусто, введите данные')
      }
    },
    LoginUser(type, action) {
      if (action.payload.email.length > 14 && action.payload.password.length > 6) {
        return userApi.login(action.payload)
      } else if (action.payload.email.length === 0 && action.payload.password.length === 0) {
        alert('пусто, введите данные')
      }
    },
    LogoutUser(type, action) {
      return userApi.logout()
    },
    ShoppinCart(type, action) {
      return userApi.shoppinCart(action.payload)
    },
    DeleteCart(type, action) {
      return userApi.deleteCart(action.payload)
    },
    ShoppinFavourites(type, action) {
      return userApi.shoppinFavourites(action.payload)
    },
    DeleteFavourites(type, action) {
      return userApi.deleteFavourites(action.payload)
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
  GetBasket,
  DeleteCart,
  ShoppinFavourites,
  DeleteFavourites,
} = BasketReducer.actions
export const reg = (state) => state.datesReg
