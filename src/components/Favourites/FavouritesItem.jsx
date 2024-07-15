import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { user } from "../../api/user"
import supabase from "../../supabase"
import { DeleteFavourites } from "../../hooks/postsSlise"

export function FavouritesItem(){
    const [allFavourites,SetAllFavourites] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        getAllFavourites()
    },[])
    useEffect(() => {
        console.log(allFavourites.length);
    },[allFavourites])
    
    async function getAllFavourites(){
        const { data } = await supabase.from('favourites').select().eq("email", user.user.email)
        SetAllFavourites(data)
    }
    return(
        <div className="Basket"> 
        {allFavourites.map((item,index) => (
            <article className="BasketBlock" key={index}>
                <img className="BasketImg"  src={item.url} alt="img"/>
                <article  className="BasketBlock1">
                    <h3 className="BasketTitle"  key={item.title}>{item.title}</h3>
                    <p className="BasketText"  key={item.price}>{item.price} ₽/шт</p>
                </article>
                <button className="BasketBtn"  onClick={() => dispatch(DeleteFavourites(item.id))}><img src="https://i.postimg.cc/fL7yncPL/icons8-trash-48-1.png" width="24px" height="24px" alt=""/></button>
            </article>         
        ))}
        </div>
    )
}