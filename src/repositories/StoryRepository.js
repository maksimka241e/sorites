import { user } from '../api/user'
import {
  DeleteCart,
  DeleteFavourites,
  SetBasket,
  SetFavourites,
  SetGallery,
  SetOneProducts,
  SetTwoProducts,
  ShoppinCart,
  ShoppinFavourites,
} from '../hooks/postsSlise'
import supabase from '../supabase'

async function getBasket(dispatch) {
  const { data } = await supabase.from('basket').select().eq('email', user.user.email)
  dispatch(SetBasket(data))
}

async function getFavourites(dispatch) {
  const { data } = await supabase.from('favourites').select().eq('email', user.user.email)
  dispatch(SetFavourites(data))
}

async function getOneProduct(dispatch) {
  const { data } = await supabase.from('products').select().eq('type', 1)
  dispatch(SetOneProducts(data))
}

async function getTwoProduct(dispatch) {
  const { data } = await supabase.from('products').select().eq('type', 2)
  dispatch(SetTwoProducts(data))
}

async function getGallery(dispatch) {
  const { data } = await supabase.from('gallery').select()
  dispatch(SetGallery(data))
}

function addbasket(dispatch, item) {
  dispatch(ShoppinCart(item))
}

function deletebasket(dispatch, id) {
  dispatch(DeleteCart(id))
}

function addfavourites(dispatch, item) {
  dispatch(ShoppinFavourites(item))
}
function deletefavourites(dispatch, id) {
  dispatch(DeleteFavourites(id))
}
const StoryRepository = {
  getBasket,
  addbasket,
  deletebasket,
  getOneProduct,
  getTwoProduct,
  getGallery,
  getFavourites,
  addfavourites,
  deletefavourites,
}
export default StoryRepository
