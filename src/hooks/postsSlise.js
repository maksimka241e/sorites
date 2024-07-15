import { createSlice } from "@reduxjs/toolkit";
import userApi, { user } from "../api/user";

export const postsReducer = createSlice({
    name: 'posts',
    initialState:{
        datesReg:{
            email:'',
            password: '',
        },
    },
    reducers: {
        RegisterUser(type,action){
            if(action.payload.email.length > 16 && action.payload.password.length > 6){
              userApi.register(action.payload)
            }else if(action.payload.email.length === 0 && action.payload.password.length === 0){
                alert("пусто, введите данные")
            }
        },
        LoginUser(type,action){
            if(action.payload.email.length > 14 && action.payload.password.length > 6){
                userApi.login(action.payload)
            }else if(action.payload.email.length === 0 && action.payload.password.length === 0){
                alert("пусто, введите данные")
            }
        },
        LogoutUser(type,action){
            userApi.logout()
        },
        ShoppinCart(type,action){
              userApi.shoppinCart(action.payload)
        },
        DeleteCart(type,action){
            userApi.deleteCart(action.payload)
        },
        ShoppinFavourites(type,action){
            userApi.shoppinFavourites(action.payload)
        },
        DeleteFavourites(type,action){
            userApi.deleteFavourites(action.payload)
        }
        
    }
})

export const { createDates, deleteDates,RegisterUser,LoginUser,LogoutUser,ShoppinCart,GetBasket,DeleteCart,ShoppinFavourites,DeleteFavourites } = postsReducer.actions
export const posts = state => state.postses
export const reg = state => state.datesReg