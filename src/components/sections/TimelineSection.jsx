import timingTitleImg from '../../assets/maket8/tild6362-3735-4333-a261-356230356466_timing.svg'
import locationTitleImg from '../../assets/maket8/tild6362-6538-4865-b161-653637616438_Location.svg'
import iconWelcomeImg from '../../assets/maket8/tild3566-3336-4730-b438-626431343866_svg_1761139213173.svg'
import iconCeremonyImg from '../../assets/maket8/tild6262-6636-4531-b266-306639393733_svg_1761139213325.svg'
import iconDinnerImg from '../../assets/maket8/tild3332-6461-4639-b866-393266336238_svg_1761139213670.svg'
import iconClosingImg from '../../assets/maket8/tild3832-3335-4937-a163-343465643530_Vector.svg'

const eventIconsByTime = {
  '15:00': iconWelcomeImg,
  '15:30': iconCeremonyImg,
  '16:30': iconDinnerImg,
  '23:00': iconClosingImg,
}

export function TimelineSection({ schedule, event }) {
  return (
    <section className="timeline-section" aria-label="Программа дня">
      <div className="section-title section-title--light">
        <h2 className="section-title__text">ТАЙМИНГ ДНЯ</h2>
        <img
          className="section-title__script section-title__script--timing"
          src={timingTitleImg}
          alt=""
          aria-hidden="true"
        />
      </div>
      <ul className="timeline-section__list">
        {schedule.map((item) => (
          <li key={`${item.time}-${item.title}`}>
            <img
              className="timeline-section__icon"
              src={eventIconsByTime[item.time]}
              alt=""
              aria-hidden="true"
            />
            <p className="timeline-section__time-text">{item.time}</p>
            <p className="timeline-section__item-title">{item.title}</p>
            <p className="timeline-section__note">{item.note}</p>
          </li>
        ))}
      </ul>
      <div className="timeline-section__location">
        <h3 className="timeline-section__location-heading">МЕСТО ПРОВЕДЕНИЯ</h3>
        <img
          className="timeline-section__location-title"
          src={locationTitleImg}
          alt=""
          aria-hidden="true"
        />
        <p className="timeline-section__location-venue">{event.venue}</p>
        <p className="timeline-section__location-address">Адрес: {event.address}</p>
        <a className="timeline-section__map-link" href={event.mapLink} target="_blank" rel="noreferrer">
          {event.mapLabel}
        </a>
      </div>
    </section>
  )
}
