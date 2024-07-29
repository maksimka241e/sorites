/* eslint-disable import/order */
import { useParams } from 'react-router-dom'
import { Footer } from '../components/common/footer'
import { Headers } from '../components/common/header'
import { KatalogWomenMain } from '../components/KatalogWomen/main'

export function KatalogWomen() {
  const params = useParams()
  return (
    <div>
      <Headers />
      <main>
        <KatalogWomenMain id={params.id} />
      </main>
      <Footer />
    </div>
  )
}
