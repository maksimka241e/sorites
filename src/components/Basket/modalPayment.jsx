import { user } from '../../api/user'
import '../../styles/Basket/modalPayment.css'

export function ModalPayment({Open}){
    return(
        <div>
            <main className="Payment_modalBlock">
                <article className='Payment_modalArticleBlock'>
                    <div className='Payment_modalDiv'>
                        <button onClick={() => Open()}>Х</button>
                        <h3>Оформление заказа</h3>
                    </div>
                    <div className='Payment_modalDivInput'>
                        <h3>Контактные данные</h3>
                        <h4>Email*</h4>
                        <input value={user.user.email} disabled/>
                        <h4>Контакное лицо (ФИО)*</h4>
                        <input />
                        <h4>Контактный телефон*</h4>
                        <input />
                        <h3>Доставка</h3>
                        <h4>Населенный пункт*</h4>
                        <input />
                    </div>
                </article>
                <article className='Payment_modalArticleBlock1'>
                </article>
            </main>
        </div>
    )
}