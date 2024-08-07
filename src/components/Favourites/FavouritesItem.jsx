/* eslint-disable import/order */
import { useEffect } from 'react'
import { useStoryRepository } from '../../repositories/StoryRepository'

export function FavouritesItem() {
  const { favourites, DeleteItemFavourites, getFavourites } = useStoryRepository()
  useEffect(() => {
    getFavourites()
  }, [getFavourites])

  return (
    <div className='Basket'>
      {favourites.length === 0 ? <h3>Пусто</h3> : ''}
      {favourites.map((item, index) => (
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
          <button className='BasketBtn' onClick={() => DeleteItemFavourites(item.id)}>
            <img src='https://i.postimg.cc/fL7yncPL/icons8-trash-48-1.png' width='24px' height='24px' alt='' />
          </button>
        </article>
      ))}
    </div>
  )
}
