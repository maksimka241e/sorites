import { BasketItem } from './basketItem'

import { user } from '../../api/user'

export function BasketMain() {
  return (
    <div>
      <h3 className='basketTitle'>Корзина</h3>
      {user.user != null ? <BasketItem /> : <h3 className='basketNone'>Автолизируйтесь чтобы добавить товар</h3>}
    </div>
  )
}
