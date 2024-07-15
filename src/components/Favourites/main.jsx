import { user } from "../../api/user";
import { FavouritesItem } from "./FavouritesItem";


export function FavouritesMain(){
    return(
        <div>
            {user.user != null ? <FavouritesItem/> : <h3>Автолизируйтесь чтобы добавить товар</h3>}
        </div>
    )
}