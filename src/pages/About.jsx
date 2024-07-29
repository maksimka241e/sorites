/* eslint-disable import/order */
import { AboutMain } from '../components/About/main'
import { Footer } from '../components/common/footer'
import { Headers } from '../components/common/header'
export function About() {
  return (
    <div>
      <Headers />
      <main>
        <AboutMain />
      </main>
      <Footer />
    </div>
  )
}
