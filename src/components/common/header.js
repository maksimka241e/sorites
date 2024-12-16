/* eslint-disable import/order */
import { Link, Outlet } from 'react-router-dom'
import { user } from '../../api/user'
import '../../styles/common/header.css'
import { useEffect, useState } from 'react'

export function Headers() {
  const [loading, setLoading] = useState(false)
  const token = user.user
  useEffect(() => {
    'f'
  }, [token])
  return (
    <header className='header'>
      <div className='HeaderBlock1'>
        <nav>
          <h3 className='headerTitle' onClick={() => setLoading(!loading)}>
            Меню
          </h3>
          <div className={loading === false ? 'loadingFalse loading' : 'loadingTrue loading'}>
            <nav className='header_navMenu'>
              <h3 className='header_navMenuTitle'>Меню</h3>
              <button className='header_navMenuBtn' onClick={() => setLoading(!loading)}>
                Х
              </button>
            </nav>
            <nav className='header_navUpMenu'>
              <h3 className='header_navUpMenuTitle'>Верхнее меню</h3>
              <Link to={'/'} className='header_navUpMenugLink'>
                Каталог
              </Link>
              <Link to={'/about'} className='header_navUpMenugLink'>
                О компании
              </Link>
              <Link to={'/contact'} className='header_navUpMenugLink'>
                Контакты
              </Link>
              <Link to={'/delivery'} className='header_navUpMenugLink'>
                Доставка
              </Link>
              <Link to={'/payment'} className='header_navUpMenugLink'>
                Оплата
              </Link>
              <Link to={'/profile'} className='header_navUpMenugLink'>
                Личный кабинет
              </Link>
            </nav>
            <nav className='header_navContact'>
              <h3 className='header_navContactTitle'>Контакты</h3>
              <p className='header_navContactText'>+7(800) 800-80-80</p>
              <p className='header_navContactText'>г. Москва, ул. Новорязанская, 18, стр. 11</p>
            </nav>
          </div>
          {loading && <div className='loadingBlackground' onClick={() => setLoading(!loading)}></div>}
        </nav>
        <nav>
          <Link to={'/'}>
            <img
              className='headerImg'
              src='https://static.insales-cdn.com/files/1/6700/16398892/original/logo-stories.svg'
              alt=''
            />
          </Link>
        </nav>
        <nav className='nav_HomeLink'>
          <nav className='nav_HomeLink'>
            <Link to={'/favourites'}>
              <img
                className='favourites'
                src='https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png'
                alt=''
              />
            </Link>
            <Link to={'/basket'}>
              <img
                className='favourites'
                src='https://img.icons8.com/?size=25&id=ii6Lr4KivOiE&format=png&color=000000'
                alt=''
              />
            </Link>
          </nav>
          {token !== null ? (
            <Link to={'/profile'}>
              <img className='favouritesProfile' src='https://i.postimg.cc/fThscFYx/user-profile-14660.png' alt='' />
            </Link>
          ) : (
            <>
              <Link to={'/register'}>
                <img
                  className='favouritesRegister'
                  src='https://i.postimg.cc/kXhc3rwS/icons8-registration-64.png'
                  alt=''
                />
              </Link>
              <Link to={'/login'}>
                <img className='favouritesLogin' src='https://i.postimg.cc/ZKgrs8KF/log-in.png' alt='' />
              </Link>
            </>
          )}
        </nav>
      </div>
      <div className='HeaderBlock2'>
        <Link className='headerTitle_block2' to={'/katalog/Men'}>
          Мужчинам
        </Link>
        <Link className='headerTitle_block2' to={'/katalog/Women'}>
          Женщинам
        </Link>
      </div>
      <Outlet />
    </header>
  )
}
