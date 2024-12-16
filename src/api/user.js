/* eslint-disable no-restricted-globals */
import { commonWindowsFalse, commonWindowsTrue } from '../components/common/modalWindows'
import supabase from '../supabase'
export const { data: user } = await supabase.auth.getUser()

async function register(data) {
  const { email, password } = data
  try {
    const { data: _error } = await supabase.auth.signUp({
      email: `${email}`,
      password: `${password}`,
    })
    const { error } = await supabase
      .from('users')
      .insert([{ email: `${email}`, password: `${password}` }])
      .single()
    commonWindowsTrue('Вы зарегистрировались')
    setTimeout(() => document.location.replace('https://maksimka241e.github.io/sorites/#/profile'), 2050)
    if (error) {
      commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
      return error
    }
  } catch (e) {
    commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
    return e
  }
}

async function login(data) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })
    if (error) {
      commonWindowsFalse('Произошла ошибка, профиль не найден')
      return error
    }
    const { data: _user } = await supabase.from('users').select().match({ id: user.id }).single()
    commonWindowsTrue('Вы вошли в профиль')
    setTimeout(() => document.location.reload(), 2050)
  } catch (e) {
    commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
    return e
  }
}

async function logout() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
      return error
    }
    return null
  } catch (e) {
    commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
    return e
  }
}

async function shoppinCart(dates) {
  const { price, title, url } = dates
  if (user.user != null) {
    try {
      const { data, error } = await supabase
        .from('basket')
        .insert({ email: user.user.email, price: price, url: url, title: title })
        .eq('email', user.user.email)
        .select()
      commonWindowsTrue('Товар добавлен в корзину')
      if (error) throw error
      return { data }
    } catch (e) {
      commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
      return e
    }
  } else {
    commonWindowsFalse('Автолизируйтесь')
    return
  }
}

async function deleteCart(index) {
  const { data, error } = await supabase.from('basket').delete().eq('id', index)
}

async function shoppinFavourites(dates) {
  const { price, title, url } = dates
  if (user.user != null) {
    try {
      const { data, error } = await supabase
        .from('favourites')
        .insert({ email: user.user.email, price: price, title: title, url: url })
        .eq('email', user.user.email)
        .select()
      commonWindowsTrue('Товар добавлен в избранное')
      if (error) {
        commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
        return error
      }
      return { data }
    } catch (e) {
      commonWindowsFalse('Произошла ошибка, попробуйте еще раз')
      return e
    }
  } else {
    commonWindowsFalse('Автолизируйтесь')
    return
  }
}

async function deleteFavourites(index) {
  const { data, error } = await supabase.from('favourites').delete().eq('id', index)
}

const userApi = { register, login, logout, shoppinCart, deleteCart, shoppinFavourites, deleteFavourites }
export default userApi
