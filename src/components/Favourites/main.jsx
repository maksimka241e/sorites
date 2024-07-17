import { user } from "../../api/user";
import { FavouritesItem } from "./FavouritesItem";


export function FavouritesMain(){
    return(
        <div>
            <h3 className="basketTitle">Избранное</h3>
            {user.user != null ? <FavouritesItem/> : <h3 className="basketNone">Автолизируйтесь чтобы добавить товар</h3>}
        </div>
    )
}