import { FavouritesMain } from "../components/Favourites/main";
import { Footer } from "../components/common/footer";
import { Headers } from "../components/common/header";

export function Favourites(){
    return(
        <div>
            <Headers/>
            <main>
                <FavouritesMain/>
            </main>
            <Footer/>
        </div>
    )
}