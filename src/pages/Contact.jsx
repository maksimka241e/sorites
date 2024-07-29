/* eslint-disable import/order */
import { ContactMain } from '../components/Contact/main'
import { Footer } from '../components/common/footer'
import { Headers } from '../components/common/header'

export function Contact() {
  return (
    <div>
      <Headers />
      <main>
        <ContactMain />
      </main>
      <Footer />
    </div>
  )
}
