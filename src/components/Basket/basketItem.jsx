import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { datesBasket } from '../../hooks/postsSlise'
import StoryRepository from '../../repositories/StoryRepository'
import '../../styles/Basket/main.css'

export function BasketItem() {
  const dispatch = useDispatch()
  const basket = useSelector(datesBasket)
  const [initialDataFetched, setInitialDataFetched] = useState(false)

  useEffect(() => {
    if (!initialDataFetched) {
      StoryRepository.getBasket(dispatch)
      setInitialDataFetched(true)
    }
  }, [initialDataFetched])

  return (
    <div className='Basket'>
      {basket.length === 0 ? <h3>Пусто</h3> : ''}
      {basket.map((item, index) => (
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
            onClick={() => StoryRepository.addfavourites(dispatch, item)}
            height='25px'
            alt=''
          />
          <button className='BasketBtn' onClick={() => StoryRepository.deletebasket(dispatch, { id: item.id, index })}>
            <img src='https://i.postimg.cc/fL7yncPL/icons8-trash-48-1.png' width='24px' height='24px' alt='' />
          </button>
        </article>
      ))}
      <article className='BasketBlock2'>
        <button className='BasketBlock2_title'>Оплатить</button>
      </article>
    </div>
  )
}
