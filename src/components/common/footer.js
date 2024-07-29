import '../../styles/common/footer.css'

export function Footer() {
  return (
    <footer className='footer'>
      <img
        className='footerTitleImg'
        alt=''
        src='https://static.insales-cdn.com/files/1/6700/16398892/original/logo-stories.svg'
      />
      <article className='footerBlockIcons'>
        <img className='footerIconsImg' alt='Tg' src='https://i.postimg.cc/15drgN0v/paper-1.png' />
        <img className='footerIconsImg' alt='Vk' src='https://i.postimg.cc/tJCN63mM/social.png' />
        <img className='footerIconsImg YT' alt='YT' src='https://i.postimg.cc/G3qQCf4w/youtube.png' />
      </article>
      <article className='footerBlockText'>
        <p className='footerText'>© 2024 Любое использование контента без письменного разрешения запрещено</p>
        <p className='footerText'>Интернет-магазин создан c помощью React</p>
      </article>
    </footer>
  )
}
