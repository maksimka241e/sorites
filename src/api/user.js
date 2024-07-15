import { useState } from "react"
import { HomeModal } from "../components/Home/modal/modal"
import { deleteDates } from "../hooks/postsSlise"
import supabase from "../supabase"
import { Home } from "../pages/Home"
export const {data: user } = await supabase.auth.getUser()

async function register(data){
    const {email, password} = data
    try{
        const { data: _error } = await supabase.auth.signUp({
            email: `${email}`,
            password: `${password}`,
          })
            const {error} = await supabase.from('users')
            .insert([{email: `${email}`,password: `${password}`}])
            .single()
            document.location.replace('http://localhost:5173/?#/login')
            document.location.reload()
            if (error) throw error
    } catch(e){
        throw e
    }
}

async function login(data){    
    try{
        const {error} = await supabase.auth.signInWithPassword({
            email:data.email,
            password:data.password,
        })
        if(error) throw error
        const {data:_user} = await supabase.from('users')
        .select()
        .match({id:user.id})
        .single()
        document.location.replace('http://localhost:5173/?#/profile')
        document.location.reload()
    }catch(e){
        throw e
    }
} 

async function logout(){
    try{
        const { error } = await supabase.auth.signOut()
        document.location.replace('http://localhost:5173/?#/login')
        if(error) throw error
        return null
    }catch(e){
        throw e
    }
}

// async function update(){
//     const user = supabase.auth.getUser()
//     if(!user) return
//     try{
//         const {data: _user} = await supabase.from('users')
//         .update(data)
//         .match({id: user.id})
//         .single()
//         return _user
//     }catch(e){
//         throw e
//     }
// }

async function shoppinCart(dates){
    const {price,title,url} = dates
    if(user.user != null){
        try{
            const {data,error} = await supabase.from('basket')
            .insert({email:user.user.email, price: price, url: url, title: title})
            .eq("email", user.user.email)
            .select();
            if(error) throw error
            return { data }
            
        }catch(e){
            throw e
        }
    }else{

    }
}

async function deleteCart(index){
    const {data,error} = await supabase.from('basket')
    .delete()
    .eq('id',index)
    document.location.reload()
}

async function shoppinFavourites(dates){
    const {price,title,url} = dates
    if(user.user != null){
        try{
            const {data,error} = await supabase.from('favourites')
            .insert({email: user.user.email, price:price, title: title, url: url})
            .eq('email', user.user.email)
            .select();
            if(error) throw error
            return { data }
        }catch(e){
            throw e
        }
    }else{

    }
}

async function deleteFavourites(index){
    const {data,error} = await supabase.from('favourites')
    .delete()
    .eq('id',index)
    document.location.reload()
}

const userApi = {register,login,logout,shoppinCart,deleteCart,shoppinFavourites,deleteFavourites}
export default userApi
//  const newBasket = basket.filter((item, index) => index !== indexs)
//  {modal === false ? '' : <FavModal/>}
// modal === true ? setTimeout(() => {SetModal(false)},1400) : setTimeout(() => {SetModal(false)},100)