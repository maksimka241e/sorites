import '../../styles/About/main.css'
import datesContact from './data'

export function ContactMain() {
  return (
    <div className='AboutMain'>
      <h3>Контакты</h3>
      <p>
        Разместите на этой странице информацию с контактами вашего интернет-магазина, а также краткую информацию о нем.
      </p>
      <article>
        {datesContact.Address.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </article>
      <section>
        <p>График работы офиса и склада:</p>
        <ul>
          {datesContact.Chart.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
        <p>Заказы через сайт принимаются круглосуточно!</p>
      </section>
      <article>
        {datesContact.Requisites.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </article>
      <p>Эту страницу можно отредактировать в бэк-офисе сайта в разделе Меню и страницы.</p>
      <p>
        Подробнее о создании текстовых страниц и меню, читайте в документации:
        https://www.insales.ru/collection/doc-settings/product/razdel-menyu
      </p>
    </div>
  )
}
