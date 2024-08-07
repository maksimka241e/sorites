import { useEffect } from 'react'

import { useStoryRepository } from '../../repositories/StoryRepository'
import '../../styles/Home/gallery.css'

export function HomeGallery() {
  const { gallery, getGallery } = useStoryRepository()
  useEffect(() => {
    getGallery()
  }, [getGallery])

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
