export function EventDetailsSection({ event }) {
  return (
    <section className="invite-section">
      <p className="invite-section-label">Место и время</p>
      <h2>{event.venue}</h2>
      <p className="invite-muted">{event.address}</p>
      <p className="invite-time">{event.timeLabel}</p>
    </section>
  )
}
