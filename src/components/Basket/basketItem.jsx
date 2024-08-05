/* eslint-disable import/order */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { user } from '../../api/user'
import { DeleteCart, ShoppinFavourites } from '../../hooks/postsSlise'
import supabase from '../../supabase'
import '../../styles/Basket/main.css'
import { ModalPayment } from './modalPayment'

export function BasketItem() {
  const [allBasket, SetAllBasket] = useState([])
  const [modal, SetModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    getAllBasket()
  }, [])

  async function getAllBasket() {
    const { data } = await supabase.from('basket').select().eq('email', user.user.email)
    SetAllBasket(data)
  }

  function AddItemfavorites(index) {
    const items = allBasket[index]
    dispatch(ShoppinFavourites(items))
  }

  function ModalOpen() {
    // allBasket.length !== 0 ? SetModal(!modal) : SetModal(false)
  }

  return (
    <div className='Basket'>
      {allBasket.length === 0 ? <h3>Пусто</h3> : ''}
      {allBasket.map((item, index) => (
        <article className='BasketBlock' key={index}>
          <img className='BasketImg' src={item.url} alt='img' />
          <article className='BasketBlock1'>
            <h3 className='BasketTitle' key={item.title}>
              {item.title}
            </h3>
            <p className='BasketText' key={item.price}>
              {item.price} ₽/шт
            </p>
          </article>
          <img
            src='https://i.postimg.cc/rprzgXC5/icons8-heart-48.png'
            className='BasketBtn'
            width='25px'
            onClick={() => AddItemfavorites(index)}
            height='25px'
            alt=''
          />
          <button className='BasketBtn' onClick={() => dispatch(DeleteCart(item.id))}>
            <img src='https://i.postimg.cc/fL7yncPL/icons8-trash-48-1.png' width='24px' height='24px' alt='' />
          </button>
        </article>
      ))}
      <article className='BasketBlock2'>
        <button onClick={() => ModalOpen()} className='BasketBlock2_title'>
          Оплатить
        </button>
      </article>
      {modal && <ModalPayment Open={ModalOpen} />}
      {modal && <div className='ModalBlackground'></div>}
    </div>
  )
}
