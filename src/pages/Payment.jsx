import { PaymentMain } from "../components/Payment/main";
import { Footer } from "../components/common/footer";
import { Headers } from "../components/common/header";

export function Payment(){
    return(
        <div>
            <Headers/>
            <main>
                <PaymentMain/>
            </main>
            <Footer/>
        </div>
    )
}