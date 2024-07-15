import { BasketMain } from "../components/Basket/main";
import { Footer } from "../components/common/footer";
import { Headers } from "../components/common/header";

export function Basket(){
    return(
        <div>
            <Headers/>
            <main>
                <BasketMain/>
            </main>
            <Footer/>
        </div>
    )
}