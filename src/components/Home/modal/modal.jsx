import { user } from "../../../api/user";
import '../../../styles/Home/Modal/modal.css'

export function HomeModal(bool,name){
    return(
        <div className={`HomeModal ${name}`}  >
            <div>{user.user != null ? bool == true ? <h3 className="HomeModalTitle home_title_true ">Добавлено</h3> : <h3 className="HomeModalTitle home_title_false ">Попробуйте еще</h3> : <h3 className="HomeModalTitle home_title_false">Автолизируйтесь чтобы добавлять товар</h3>}</div>     
        </div>
    )
}