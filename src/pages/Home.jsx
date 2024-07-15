import { HomeGallery } from "../components/Home/gallery";
import { Headers } from "../components/common/header";
import { HomeTabs } from "../components/Home/tabs"
import { Footer } from "../components/common/footer";
import { Brands } from "../components/Home/brands";
import { HomeModal } from "../components/Home/modal/modal";
import { useState } from "react";



export function Home(){
    // const [modal,SetModal] = useState(bool || false)
    // modal === true ? setTimeout(() => {SetModal(false)},1400) : setTimeout(() => {SetModal(false)},100)
    return(
    <div>
        <Headers/>
        <main>
            <HomeGallery/>
            <HomeTabs/>
            <Brands/>
        </main>
        <Footer/>
        {/* {modal === false ? '' : <HomeModal/>} */}
    </div>
    )
}