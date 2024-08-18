import '../../styles/About/main.css'
import datesPayment from './data'

export function PaymentMain() {
  return (
    <div className='AboutMain'>
      <h3>Оплата</h3>
      <p>
        Разместите на этой странице информацию с описанием способов оплаты, которые использует ваш интернет-магазин.
      </p>
      <section>
        <p>Например:</p>
        <p>Вы можете оплатить заказ:</p>
        <ul>
          {datesPayment.Pay.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </section>
      <article>
        {datesPayment.PostalPayment.map((item) => (
          <p key={item.text}>{item.text}</p>
        ))}
      </article>
    </div>
  )
}
