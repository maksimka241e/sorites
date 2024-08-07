/* eslint-disable import/order */
import { Tabs } from 'flowbite-react'
import '../../styles/Home/tabs.css'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useStoryRepository } from '../../repositories/StoryRepository'

export function HomeTabs() {
  const { oneProducts, twoProducts, getOneProducts, getTwoProducts, AddItemfavorites } = useStoryRepository()
  useEffect(() => {
    getOneProducts()
    getTwoProducts()
  }, [getOneProducts, getTwoProducts])

  return (
    <div className='home_tabsBlock'>
      <Tabs variant='underline'>
        <Tabs.Item active title='Мужчинам'>
          <div className='home_tabsTabBlockMen'>
            {oneProducts.map((item, index) => (
              <article key={index} className='home_tabsTabAcrticle'>
                <img
                  className='home_favourites'
                  src='https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png'
                  onClick={() => AddItemfavorites(item)}
                  alt=''
                />
                <Link to={`/katalog/Men/${index}`}>
                  <img src={item.url} alt='' className='home_tabsTabAcrticle_img' />
                </Link>
                <h3 className='home_tabsTitle' key={item.title}>
                  {item.title}
                </h3>
                <article>
                  <p className='home_tabsText' key={item.price}>
                    {item.price} ₽
                  </p>
                  <Link to={`/katalog/Men/${index}`}>
                    <button className='home_tabsBtnAddBasket'>Подробнее</button>
                  </Link>
                </article>
              </article>
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title='Женщинам'>
          <div className='home_tabsTabBlockWomen'>
            {twoProducts.map((item, index) => (
              <article key={index} className='home_tabsTabAcrticle'>
                <img
                  className='home_favourites'
                  src='https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png'
                  onClick={() => AddItemfavorites(item)}
                  alt=''
                />
                <Link to={`/katalog/Women/${index}`}>
                  <img src={item.url} alt='' className='home_tabsTabAcrticle_img' />
                </Link>
                <h3 className='home_tabsTitle' key={item.title}>
                  {item.title}
                </h3>
                <article>
                  <p className='home_tabsText' key={item.price}>
                    {item.price} ₽
                  </p>
                  <Link to={`/katalog/Women/${index}`}>
                    <button className='home_tabsBtnAddBasket'>Подробнее</button>
                  </Link>
                </article>
              </article>
            ))}
          </div>
        </Tabs.Item>
      </Tabs>
      <Outlet />
      {/* {modal === false ? '' : <HomeModal />} */}
    </div>
  )
}
