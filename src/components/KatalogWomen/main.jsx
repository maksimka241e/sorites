// eslint-disable-next-line import/order
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../../styles/KatalogAll/main.css'
import { useDispatch, useSelector } from 'react-redux'

import { datesTwoProducts } from '../../hooks/postsSlise'
import StoryRepository from '../../repositories/StoryRepository'
import { Specifications } from '../KatalogMen/specifications'

export function KatalogWomenMain({ id }) {
  const dispatch = useDispatch()
  const [specifications, SetSpecifications] = useState(false)
  const [reviews, SetReviews] = useState(false)
  const twoProducts = useSelector(datesTwoProducts)
  const cart = twoProducts[id]
  useEffect(() => {
    if (twoProducts.length === 0) {
      StoryRepository.getTwoProduct(dispatch)
    }
  }, [])
  return (
    <div className='KatalogMenMain KatalogAllMain'>
      {cart === undefined ? (
        <div></div>
      ) : (
        <article className='KatalogAllArticle'>
          <div className='Katalog_block1'>
            <img className='Katalog_block1Img' src={cart.url} alt='img' />
          </div>
          <div className='Katalog_block2'>
            <img
              className='Katalog_block2Img'
              src='https://i.postimg.cc/sgZbJmsH/rejting-rkswlht9y8ep-128.png'
              alt='img'
            />
            <h3 className='Katalog_block2Title'>{cart.title}</h3>
            <h3 className='Katalog_block2Price'>{cart.price} ₽</h3>
            <p className='Katalog_block2font'>Размер</p>
            <article className='Katalog_block2fontBlock'>
              <p className='Katalog_block2fontTitle'>S</p>
              <p className='Katalog_block2fontTitle'>M</p>
              <p className='Katalog_block2fontTitle'>L</p>
              <p className='Katalog_block2fontTitle'>XL</p>
            </article>
            <article className='Katalog_block2BuyBlock'>
              <button className='Katalog_block2Btn' onClick={() => StoryRepository.addbasket(dispatch, cart)}>
                В корзину
              </button>
              <img
                className='Katalog_block2Img1'
                onClick={() => StoryRepository.addfavourites(dispatch, cart)}
                src='https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png'
                alt=''
              />
            </article>
            <div className='specifications_titleBlock'>
              <h3 className='specifications_title' onClick={() => SetSpecifications(!specifications)}>
                Характеристика
              </h3>
              {specifications && <Specifications cart={cart} />}
            </div>
            <div className='specifications_titleBlock'>
              <h3 className='specifications_title' onClick={() => SetReviews(!reviews)}>
                Отзывы
              </h3>
              {reviews && (
                <div>
                  <p className='SpecificationsText'>Отзывов нет</p>
                </div>
              )}
            </div>
          </div>
        </article>
      )}
      <article className='KatalogSimilarBlock'>
        <h3 className='KatalogSimilarTitle'>Аналогичные товары</h3>
        <div className='KatalogSimilarBlock1'>
          {twoProducts.map((item, index) => (
            <article className='KatalogSimilarBlock2' key={index}>
              <Link to={`/katalog/Women/${index}`}>
                <img className='KatalogSimilarImg' src={item.url} alt='' />
              </Link>
              <h3 className='KatalogSimilarText' key={item.title}>
                {item.title}
              </h3>
              <p className='KatalogSimilarPrice' key={item.price}>
                {item.price} ₽
              </p>
              <article className='KatalogSimilarBlock3'>
                <Link to={`/katalog/Women/${index}`} className='KatalogSimilarBtn'>
                  <button className='KatalogSimilarBtnA'>Подробнее</button>
                </Link>
                <img
                  className='KatalogSimilarImg1'
                  onClick={() => StoryRepository.addfavourites(dispatch, item)}
                  src='https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png'
                  alt=''
                />
              </article>
            </article>
          ))}
        </div>
      </article>
      <Outlet />
    </div>
  )
}
