import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/Home/gallery.css'
import { datesGallery } from '../../hooks/postsSlise'
import StoryRepository from '../../repositories/StoryRepository'
import { commonWindowsFalse } from '../common/modalWindows'

export function HomeGallery() {
  const dispatch = useDispatch()
  const gallery = useSelector(datesGallery)
  useEffect(() => {
    try {
      if (gallery.length === 0) {
        StoryRepository.getGallery(dispatch)
      }
    } catch (e) {
      commonWindowsFalse('Обновите страницу')
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
