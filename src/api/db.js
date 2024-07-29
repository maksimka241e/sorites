import supabase from '../supabase'

// метод для получения данных из всех таблиц
async function fetchAllData() {
  try {
    // пользователи
    const { data: users } = await supabase.from('users').select('id, email, basket')
    return { users }
  } catch (e) {
    console.error(e)
  }
  try {
    const { data: baskets } = await supabase.from('basket').select('basket')
    return { baskets }
  } catch (e) {
    throw e
  }
}

const dbApi = { fetchAllData }

export default dbApi
