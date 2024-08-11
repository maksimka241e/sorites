import '../../styles/About/main.css'
import datesDelivery from './data'

export function DeliveryMain() {
  return (
    <div className='AboutMain'>
      <h3>Доставка</h3>
      <p>
        Разместите на этой странице информацию с описанием способов доставки, которые использует ваш интернет-магазин.
      </p>
      <article>
        <p>Например:</p>
        <p>Наш интернет-магазин осуществляет доставку по Москве и регионам России:</p>
        <ul>
          {datesDelivery.ForExample.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
        <p>Сроки доставки:</p>
        <ul>
          {datesDelivery.DeliveryTime.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </article>
      {datesDelivery.PostalDelivery.map((item) => (
        <p key={item.text}>{item.text}</p>
      ))}
    </div>
  )
}
