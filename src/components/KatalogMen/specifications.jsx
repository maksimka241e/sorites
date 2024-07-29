export function Specifications({ cart }) {
  return (
    <div className='SpecificationsBlock'>
      <article>
        <p className='SpecificationsTitle'>Страна</p>
        <p className='SpecificationsText'>{cart.country}</p>
      </article>
      <article>
        <p className='SpecificationsTitle'>Состав</p>
        <p className='SpecificationsText'>{cart.composition}</p>
      </article>
    </div>
  )
}
