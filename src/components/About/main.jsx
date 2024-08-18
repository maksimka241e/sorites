/* eslint-disable import/order */
import '../../styles/About/main.css'
import datesAbout from './data'

export function AboutMain() {
  return (
    <div className='AboutMain'>
      <h3>О компании</h3>
      <p>Разместите на этой странице информацию с описанием вашего магазина.</p>
      <article>
        <p>Например:</p>
        {datesAbout.Address.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </article>
      <section>
        <p>Наши главные преимущества:</p>
        <ul>
          {datesAbout.Advantages.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </section>
      <p>Эту страницу можно отредактировать в бэк-офисе сайта в разделе Меню и страницы.</p>
      <p>
        Подробнее о создании текстовых страниц и меню, читайте в документации:
        https://www.insales.ru/collection/doc-settings/product/razdel-menyu
      </p>
    </div>
  )
}
