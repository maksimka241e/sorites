/* eslint-disable import/order */
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/KatalogAll/main.css'
import { Specifications } from './specifications'
import { useStoryRepository } from '../../repositories/StoryRepository'

export function KatalogMenMain({ id }) {
  const { oneProducts, AddItemfavorites, AddItemBasket } = useStoryRepository()
  const [specifications, SetSpecifications] = useState(false)
  const [reviews, SetReviews] = useState(false)
  const cart = oneProducts[id]

  return (
    <div className='KatalogMenMain KatalogAllMain'>
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
            <button className='Katalog_block2Btn' onClick={() => AddItemBasket(cart)}>
              В корзину
            </button>
            <img
              className='Katalog_block2Img1'
              onClick={() => AddItemfavorites(cart)}
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
      <article className='KatalogSimilarBlock'>
        <h3 className='KatalogSimilarTitle'>Аналогичные товары</h3>
        <div className='KatalogSimilarBlock1'>
          {oneProducts.map((item, index) => (
            <article className='KatalogSimilarBlock2' key={index}>
              <Link to={`/katalog/Men/${index}`}>
                <img className='KatalogSimilarImg' src={item.url} alt='' />
              </Link>
              <h3 className='KatalogSimilarText' key={item.title}>
                {item.title}
              </h3>
              <p className='KatalogSimilarPrice' key={item.price}>
                {item.price} ₽
              </p>
              <article className='KatalogSimilarBlock3'>
                <Link to={`/katalog/Men/${index}`} className='KatalogSimilarBtn'>
                  <button className='KatalogSimilarBtnA'>Подробнее</button>
                </Link>
                <img
                  className='KatalogSimilarImg1'
                  onClick={() => AddItemfavorites(item)}
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
