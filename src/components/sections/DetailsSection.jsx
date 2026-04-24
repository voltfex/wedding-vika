import detailsTitleImg from '../../assets/maket8/tild6431-3038-4764-a137-333061626338_Details.svg'

export function DetailsSection({ details }) {
  return (
    <section className="details-section" aria-label="Детали">
      <div className="section-title section-title--dark">
        <h2 className="section-title__text">ДЕТАЛИ</h2>
        <img
          className="section-title__script section-title__script--details"
          src={detailsTitleImg}
          alt=""
          aria-hidden="true"
        />
      </div>
      <ul className="details-section__list">
        {details.items.map((item) => (
          <li key={item.title}>
            <h3 className="details-section__item-title">{item.title}</h3>
            <p className="details-section__item-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
