export function RsvpSection({ rsvp }) {
  return (
    <section className="invite-section invite-rsvp">
      <p className="invite-section-label">Подтверждение</p>
      <h2>{rsvp.title}</h2>
      <p className="invite-muted">{rsvp.deadline}</p>
      <a className="invite-contact" href={rsvp.contactLink}>
        {rsvp.contactLabel}
      </a>
    </section>
  )
}
