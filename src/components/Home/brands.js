import { Link, Outlet } from 'react-router-dom'
import '../../styles/Home/brands.css'

export function Brands() {
  return (
    <div className='brands'>
      <h3 className='brandsTitle'>Мы на маркетплейсах</h3>
      <article className='brandsBlock'>
        <img
          className='brandsImg OzonImg'
          src='https://static.insales-cdn.com/r/JzJylb_pVUo/rs:fit:500:500:1/plain/files/1/665/16630425/original/OZON_72d25ecdccb20a6da30882175ff85386.svg@webp'
          alt=''
        />
        <img
          className='brandsImg OzonImg'
          src='https://static.insales-cdn.com/r/pdIgDvVna_I/rs:fit:500:500:1/plain/files/1/667/16630427/original/WILDBERRIES_1d1acaf560b75cc441a1f3962a041aba.svg@webp'
          alt=''
        />
        <img
          className='brandsImg OzonImg'
          src='https://static.insales-cdn.com/r/uHSebc53tu8/rs:fit:500:500:1/plain/files/1/706/16630466/original/Яндекс_Маркет_1e37154732d64395eb9b07670d398b56.svg@webp'
          alt=''
        />
        <img
          className='brandsImg OzonImg'
          src='https://static.insales-cdn.com/r/8fl1qnBcy-o/rs:fit:500:500:1/plain/files/1/670/16630430/original/Avito_bf4f35811b0d01bc36a1d33cc67e33d6.svg@webp'
          alt=''
        />
      </article>
      <h3 className='brandsTitle'>О магазине Stories</h3>
      <p className='brandsText'>
        Тут вы можете добавить небольшое описание о вашем интернет-магазине. Какие у вас есть плюсы и можете добавить
        интересные факты о магазине
      </p>
      <Link className='brandsLink'>Подробнее</Link>
      <Outlet />
    </div>
  )
}
