import { createClient } from '@supabase/supabase-js'

const apiKey = process.env.KEY_API
const urlApi = process.env.URL_API
const supabase = createClient(`${urlApi}`, `${apiKey}`)

export default supabase
