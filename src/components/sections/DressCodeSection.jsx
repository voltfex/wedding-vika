import { useState } from 'react'
import dressCodeTitleImg from '../../assets/maket8/tild6565-6539-4965-a631-386434643030_Dress-Code.svg'

const inspirationSlides = Object.entries(
  import.meta.glob('../../assets/dress/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, src]) => src)

const paletteColors = ['#d89aa7', '#7f9a76', '#8c74a7', '#2b2b2b', '#d8c3a6']

export function DressCodeSection({ dressCode }) {
  const [slideIndex, setSlideIndex] = useState(0)

  const showPrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? inspirationSlides.length - 1 : prev - 1))
  }

  const showNextSlide = () => {
    setSlideIndex((prev) => (prev === inspirationSlides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="dress-code-section" aria-label="Дресс-код">
      <div className="section-title section-title--dark">
        <h2 className="section-title__text">ДРЕСС-КОД</h2>
        <img
          className="section-title__script section-title__script--dress"
          src={dressCodeTitleImg}
          alt=""
          aria-hidden="true"
        />
      </div>
      <p className="dress-code-section__text">{dressCode.text}</p>
      <ul className="dress-code-section__palette" aria-label="Палитра дресс-кода">
        {paletteColors.map((color) => (
          <li key={color} style={{ '--swatch-color': color }} />
        ))}
      </ul>
      <p className="dress-code-section__shoe-note">{dressCode.shoeNote}</p>
      <p className="dress-code-section__inspiration-title">{dressCode.inspirationTitle}</p>
      <div className="dress-code-section__slider" aria-label="Слайдер вдохновения для образов">
        <button
          className="dress-code-section__arrow dress-code-section__arrow--left"
          type="button"
          onClick={showPrevSlide}
          aria-label="Предыдущий образ"
        >
          ‹
        </button>
        <img
          className="dress-code-section__slide-image"
          src={inspirationSlides[slideIndex]}
          alt={`Образ ${slideIndex + 1}`}
        />
        <button
          className="dress-code-section__arrow dress-code-section__arrow--right"
          type="button"
          onClick={showNextSlide}
          aria-label="Следующий образ"
        >
          ›
        </button>
      </div>
    </section>
  )
}
