/* eslint-disable import/order */
import { Link, Outlet } from 'react-router-dom'
import '../styles/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, reg } from '../hooks/postsSlise'
import { useState } from 'react'
import { user } from '../api/user'
import { Headers } from '../components/common/header'
import { Footer } from '../components/common/footer'
export function Login() {
  const login = useSelector(reg)
  const dispatch = useDispatch()
  const [users, useUsers] = useState(login)

  function handleChange(prop, event) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useUsers({ ...users, ...{ [prop]: event.target.value } })
  }
  if (user.user) {
    document.location.replace('https://maksimka241e.github.io/sorites/#/')
  }

  return (
    <div className='BlockLogin'>
      <Headers />
      <main className='mainLogin'>
        <form className='mainBlockLogin'>
          <section className='mainSectionLogin'>
            <h3 className='titleLogin'>Авторизоваться в аккаунт</h3>
            <article>
              <h5 className='emailLogin'>Почта</h5>
              <input
                className='inputLogin'
                type='email'
                onChange={(i) => handleChange('email', i)}
                value={users.email}
                minLength={'15'}
              />
            </article>
            <article>
              <h5 className='passwordLogin'>Пароль</h5>
              <input
                className='inputLogin'
                type='password'
                onChange={(i) => handleChange('password', i)}
                value={users.password}
                minLength={'6'}
              />
            </article>
            <button className='buttonLogin' onClick={() => dispatch(LoginUser(users))}>
              Войти в систему
            </button>
            <h5 className='textLogin'>
              Нету аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
            </h5>
          </section>
          <img src='https://i.postimg.cc/FzDSMF94/cloud-01.png' alt='' className='cloud1' />
          <img src='https://i.postimg.cc/HLwm2B0q/cloud-02.png' alt='' className='cloud2' />
          <img src='https://i.postimg.cc/52FQxW18/cloud-03.png' alt='' className='cloud3' />
        </form>
      </main>
      <Footer />
      <Outlet />
    </div>
  )
}
