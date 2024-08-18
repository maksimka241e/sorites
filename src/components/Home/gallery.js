import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/Home/gallery.css'
import { datesGallery } from '../../hooks/postsSlise'
import StoryRepository from '../../repositories/StoryRepository'

export function HomeGallery() {
  const dispatch = useDispatch()
  const gallery = useSelector(datesGallery)
  useEffect(() => {
    if (gallery.length === 0) {
      StoryRepository.getGallery(dispatch)
    }
  }, [])

  return (
    <div className='home_galleryBlock'>
      {gallery.map((item, index) => (
        <article className='home_galleeryArticle' key={index}>
          <img className='home_galleeryImg' src={item.url} key={item.url} alt='' />
        </article>
      ))}
    </div>
  )
}
