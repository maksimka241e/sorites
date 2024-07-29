/* eslint-disable import/order */
import { useDispatch } from 'react-redux'
import { Headers } from '../components/common/header'
import '../styles/Profile.css'
import { LogoutUser } from '../hooks/postsSlise'
import { user } from '../api/user'
import { Footer } from '../components/common/footer'
export function Profile() {
  const dispatch = useDispatch()

  if (user.user == null) {
    document.location.replace('https://maksimka241e.github.io/sorites/#/login')
  }

  return (
    <div className='BlockProfile'>
      <Headers />
      <main className='MainProfile'>
        <section className='sectionProfile'>
          <h3 className='titleProfile'>Профиль</h3>
          <article className='acticleProfile'>
            <h5 className='emailProfile'>email:</h5>
            <p className='textProfile'>{user.user.email}</p>
          </article>
          <article className='acticleProfile'>
            <h5 className='roleProfile'>role:</h5>
            <p className='textProfile'>{user.user.role}</p>
          </article>
          <button className='buttonProfile' onClick={() => dispatch(LogoutUser())}>
            Выйти с аккаунта
          </button>
        </section>
      </main>
      <Footer />
    </div>
  )
}
