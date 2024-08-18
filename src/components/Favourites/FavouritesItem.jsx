import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { datesFavourites } from '../../hooks/postsSlise'
import StoryRepository from '../../repositories/StoryRepository'

export function FavouritesItem() {
  const favourites = useSelector(datesFavourites)
  const dispatch = useDispatch()
  const [initialDataFetched, setInitialDataFetched] = useState(false)

  useEffect(() => {
    if (!initialDataFetched) {
      StoryRepository.getFavourites(dispatch)
      setInitialDataFetched(true)
    }
  }, [initialDataFetched])

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
          <button
            className='BasketBtn'
            onClick={() => StoryRepository.deletefavourites(dispatch, { id: item.id, index })}
          >
            <img src='https://i.postimg.cc/fL7yncPL/icons8-trash-48-1.png' width='24px' height='24px' alt='' />
          </button>
        </article>
      ))}
    </div>
  )
}
