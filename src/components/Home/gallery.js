import datesAll from '../../links/home/alldatesImg'
import '../../styles/Home/gallery.css' 

export function HomeGallery(){
    return(
        <div className="home_galleryBlock">
            {datesAll.datesImgGallery.map((item,index) => (
                <article className="home_galleeryArticle" key={index}>
                  <img  className="home_galleeryImg" src={item} key={item} alt=""/>  
                </article>
            ))}
        </div>
    )
}