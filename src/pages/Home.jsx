/* eslint-disable import/order */
import { HomeGallery } from '../components/Home/gallery'
import { Headers } from '../components/common/header'
import { HomeTabs } from '../components/Home/tabs'
import { Footer } from '../components/common/footer'
import { Brands } from '../components/Home/brands'

export function Home() {
  return (
    <div>
      <Headers />
      <main>
        <HomeGallery />
        <HomeTabs />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
