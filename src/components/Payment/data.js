const Pay = [
  { text: 'Наличными курьеру или в пункте выдачи при получении заказа' },
  { text: 'Банковской картой Visa, Mastercard или МИР через сайт при оформлении заказа' },
  { text: 'Наложенным платежом при заказе с доставкой Почтой России' },
]

const PostalPayment = [
  { text: 'Эту страницу можно отредактировать в бэк-офисе сайта в разделе Меню и страницы.' },
  {
    text: 'Подробнее о создании текстовых страниц и меню, читайте в документации: https://www.insales.ru/collection/doc-settings/product/razdel-menyu',
  },
  { text: 'Настроить расчёт стоимости доставки при оформлении заказа можно настроить в разделе Настройки - Доставка.' },
  {
    text: 'Подробнее о настройке способов доставки, читайте в документации: https://www.insales.ru/collection/doc-delivery/product/dostavka',
  },
]

const datesPayment = { Pay, PostalPayment }
export default datesPayment
