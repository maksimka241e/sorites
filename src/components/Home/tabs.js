import datesAll from "../../links/home/alldatesImg";
import {Tabs} from 'flowbite-react'
import '../../styles/Home/tabs.css'
import { useDispatch } from "react-redux";
import { ShoppinCart, ShoppinFavourites } from "../../hooks/postsSlise";

export function HomeTabs(){
    const dispatch = useDispatch()

    function AddItemBasketWomen(index){
        const items = datesAll.tabsImgWomen[index]
        dispatch(ShoppinCart(items))
    }

    function AddItemBasketMen(index){
        const items = datesAll.tabsImgMen[index]
        dispatch(ShoppinCart(items))
    }

    function AddItemfavoritesWomen(index){
        const items = datesAll.tabsImgWomen[index]
        dispatch(ShoppinFavourites(items))
    }

    function AddItemfavoritesMen(index){
        const items = datesAll.tabsImgMen[index]
        dispatch(ShoppinFavourites(items))
    }

    return(
    <div className="home_tabsBlock">
        <Tabs variant="underline">
        <Tabs.Item active title="Мужчинам">
                <div className="home_tabsTabBlockMen">
                {datesAll.tabsImgMen.map((item,index) => (
                    <article key={index} className="home_tabsTabAcrticle">
                        <img className="home_favourites" src="https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png" onClick={() => AddItemfavoritesMen(index)} alt=""/>
                        <img src={item.url} alt="" className="home_tabsTabAcrticle_img"/>
                        <h3 className="home_tabsTitle" key={item.title}>{item.title}</h3>
                        <article>
                            <p className="home_tabsText" key={item.price}>{item.price} ₽</p>
                            <button onClick={() => AddItemBasketMen(index)} className="home_tabsBtnAddBasket">В корзину</button>
                        </article>
                   </article>
                ))}
                </div>
        </Tabs.Item>
            <Tabs.Item  title="Женщинам">
                <div className="home_tabsTabBlockWomen">
                {datesAll.tabsImgWomen.map((item,index) => (
                    <article key={index} className="home_tabsTabAcrticle">
                         <img className="home_favourites" src="https://heat-hit.ru/wp-content/uploads/2023/03/ic-heart-1320x1320.png" onClick={() => AddItemfavoritesWomen(index)} alt=""/>
                        <img src={item.url} alt="" className="home_tabsTabAcrticle_img"/>
                        <h3 className="home_tabsTitle" key={item.title}>{item.title}</h3>
                        <article>
                            <p className="home_tabsText" key={item.price}>{item.price} ₽</p>
                            <button onClick={() => AddItemBasketWomen(index)} className="home_tabsBtnAddBasket">В корзину</button>
                        </article>
                   </article>
                ))}
                </div>
            </Tabs.Item>
        </Tabs>
    </div>
    )
}