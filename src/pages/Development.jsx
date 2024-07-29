import { Footer } from '../components/common/footer'
import { Headers } from '../components/common/header'
import '../styles/Development/main.css'
export function Development() {
  return (
    <div className=''>
      <Headers />
      <main className='Development'>
        <h3 className='Development_title'>В процессе разработки...</h3>
      </main>
      <Footer />
    </div>
  )
}
