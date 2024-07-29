/* eslint-disable import/order */
import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { RegisterUser, reg } from '../hooks/postsSlise'
import '../styles/Login.css'
import { Headers } from '../components/common/header'
import { Footer } from '../components/common/footer'
import { RegisterModal } from '../components/Register/RegisterModal'

export function Reguster() {
  const registers = useSelector(reg)
  const dispatch = useDispatch()
  const [users, useUsers] = useState(registers)
  const [modal, SetModal] = useState(false)

  function handleChange(prop, event) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useUsers({ ...users, ...{ [prop]: event.target.value } })
  }
  function RegisterUsers() {
    dispatch(RegisterUser(users))
    SetModal(true)
  }

  modal === true
    ? setTimeout(() => {
        SetModal(false)
        document.location.replace('https://maksimka241e.github.io/sorites/#/login')
        document.location.reload()
      }, 2000)
    : setTimeout(() => {
        SetModal(false)
      }, 100)
  return (
    <div className='BlockRegister'>
      <Headers />
      <main className='mainLogin'>
        <form className='mainBlockLogin'>
          <section className='mainSectionLogin'>
            <h3 className='titleLogin'>Зарегистрировать аккаунт</h3>
            <article>
              <h5 className='emailLogin'>Почта</h5>
              <input
                className='inputLogin'
                type='email'
                onChange={(i) => handleChange('email', i)}
                value={users.email}
                minLength={'16'}
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
            <button className='buttonLogin' onClick={() => RegisterUsers()}>
              Зарегистрироваться
            </button>
            <h5 className='textLogin'>
              Уже есть аккаунт? <Link to={'/login'}>Авторизоваться</Link>
            </h5>
          </section>
          <img src='https://i.postimg.cc/FzDSMF94/cloud-01.png' alt='' className='cloud1' />
          <img src='https://i.postimg.cc/HLwm2B0q/cloud-02.png' alt='' className='cloud2' />
          <img src='https://i.postimg.cc/52FQxW18/cloud-03.png' alt='' className='cloud3' />
        </form>
      </main>
      <Outlet />
      <Footer />
      {modal === false ? '' : <RegisterModal />}
    </div>
  )
}
