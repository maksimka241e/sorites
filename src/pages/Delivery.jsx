import { DeliveryMain } from "../components/Delivery/main";
import { Footer } from "../components/common/footer";
import { Headers } from "../components/common/header";

export function Delivery(){
    return(
        <div>
            <Headers/>
            <main>
                <DeliveryMain/>
            </main>
            <Footer/>
        </div>
    )
}