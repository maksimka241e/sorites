import { user } from "../../api/user";
import { BasketItem } from "./basketItem";


export function BasketMain(){
    return(
        <div>
            {user.user != null ? <BasketItem/> : <h3>Автолизируйтесь чтобы добавить товар</h3>}
        </div>
    )
}