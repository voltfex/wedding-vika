import frameImg from '../../assets/ramka.png'
import dividerImg from '../../assets/line.png'
import vikaImg from '../../assets/vika.jpg'
import ilyaImg from '../../assets/ilya.jpg'
import togetherImg from '../../assets/together.jpg'
import heartImg from '../../assets/heart.svg'
import b2TitleImg from '../../assets/b2_title.svg'
import b2DescrImg from '../../assets/b2_descr.svg'

function Polaroid({ photoSrc, photoAlt, className }) {
  return (
    <figure className={`polaroid ${className}`}>
      <div className="polaroid__photo-clip">
        <img className="polaroid__photo" src={photoSrc} alt={photoAlt} />
      </div>
      <img className="polaroid__frame" src={frameImg} alt="" aria-hidden="true" />
    </figure>
  )
}

export function LoveStorySection({ story }) {
  return (
    <section className="love-story" aria-label="История любви">
      <div className="love-story__kids">
        <Polaroid
          className="polaroid--left"
          photoSrc={vikaImg}
          photoAlt="Вика в детстве"
        />
        <Polaroid
          className="polaroid--right"
          photoSrc={ilyaImg}
          photoAlt="Илья в детстве"
        />
      </div>

      <img className="love-story__divider" src={dividerImg} alt="" aria-hidden="true" />
      <img
        className="love-story__title-art"
        src={b2TitleImg}
        alt="Узнаете этих детишек? Да-да, это мы!"
      />
      <img
        className="love-story__descr-art"
        src={b2DescrImg}
        alt="Время летит быстро, правда? Вот мы и выросли. Кажется, пришло время создать свою семью."
      />
      <img className="love-story__divider" src={dividerImg} alt="" aria-hidden="true" />

      <div className="love-story__together">
        <Polaroid
          className="polaroid--together"
          photoSrc={togetherImg}
          photoAlt="Вика и Илья вместе"
        />
      </div>

      <div className="love-story__footer">
          <h2 className="love-story__heading">{story.heading}</h2>
          <p className="love-story__text">{story.primaryText}</p>
          <p className="love-story__date">{story.dateText}</p>
          <p className="love-story__text">{story.secondaryText}</p>
      </div>
    </section>
  )
}
