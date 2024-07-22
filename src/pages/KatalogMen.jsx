import { useParams } from "react-router-dom";
import { Footer } from "../components/common/footer";
import { Headers } from "../components/common/header";
import { KatalogMenMain } from "../components/KatalogMen/main";


export function KatalogMen(){
    const params = useParams()

    return(
        <div>
            <Headers/>
            <main>
                <KatalogMenMain id={params.id}/>
            </main>
            <Footer/>
        </div>
    )
}