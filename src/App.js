/* eslint-disable import/order */
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Reguster } from './pages/Register'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { About } from './pages/About'
import { Payment } from './pages/Payment'
import { Contact } from './pages/Contact'
import { Delivery } from './pages/Delivery'
import { Basket } from './pages/Basket'
import { Favourites } from './pages/Favourites'
import { Development } from './pages/Development'
import { KatalogMen } from './pages/KatalogMen'
import { KatalogWomen } from './pages/KatalogWomen'
import { StoryRepositoryProvider } from './repositories/StoryRepository'

function App() {
  return (
    <div>
      <StoryRepositoryProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Reguster />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/katalog/Men' element={<Development />} />
          <Route path='/katalog/Women' element={<Development />} />
          <Route path='/katalog/Women/:id' element={<KatalogWomen />} />
          <Route path='/katalog/Men/:id' element={<KatalogMen />} />
        </Routes>
      </StoryRepositoryProvider>
    </div>
  )
}

export default App
