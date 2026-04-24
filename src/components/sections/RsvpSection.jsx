import { useState } from 'react'
import rsvpTitleImg from '../../assets/maket8/tild6634-3839-4638-b334-663231303763_rsvp.svg'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgordzyg'

export function RsvpSection({ rsvp }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setSubmitState('idle')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setSubmitState('success')
    } catch (error) {
      setSubmitState('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rsvp-section" aria-label="Подтверждение присутствия">
      <div className="section-title section-title--light">
        <h2 className="section-title__text">АНКЕТА ГОСТЯ</h2>
        <img
          className="section-title__script section-title__script--rsvp"
          src={rsvpTitleImg}
          alt=""
          aria-hidden="true"
        />
      </div>
      <p className="rsvp-section__deadline">{rsvp.deadline}</p>
      <p className="rsvp-section__note">{rsvp.note}</p>
      <form className="rsvp-section__form" onSubmit={handleSubmit}>
        <label className="rsvp-section__field-label" htmlFor="guest-name">
          Имя и фамилия
        </label>
        <input
          className="rsvp-section__text-input"
          id="guest-name"
          name="guestName"
          type="text"
          autoComplete="name"
          required
        />
        <fieldset className="rsvp-section__fieldset">
          <legend className="rsvp-section__legend">Подтвердите, пожалуйста, участие в торжестве</legend>
          {rsvp.options.map((option) => (
            <label className="rsvp-section__option" key={option.value}>
              <input type="radio" name="attendance" value={option.value} required />
              <span>{option.label}</span>
            </label>
          ))}
        </fieldset>
        <label className="rsvp-section__field-label" htmlFor="guest-note">
          Дополнительная информация
        </label>
        <textarea
          className="rsvp-section__textarea"
          id="guest-note"
          name="guestNote"
          rows="4"
          placeholder="Например: предпочтения по меню, аллергии или важные пожелания"
        />
        <button className="rsvp-section__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправляем...' : 'Отправить'}
        </button>
        {submitState === 'success' && (
          <p className="rsvp-section__status rsvp-section__status--success" role="status">
            Спасибо. Анкета отправлена.
          </p>
        )}
        {submitState === 'error' && (
          <p className="rsvp-section__status rsvp-section__status--error" role="status">
            Не удалось отправить анкету. Попробуйте еще раз.
          </p>
        )}
      </form>
    </section>
  )
}
