export function CoupleHeroSection({ coupleName, subtitle, dateLabel }) {
  return (
    <section className="invite-section invite-hero">
      <p className="invite-kicker">Свадебное приглашение</p>
      <h1>{coupleName}</h1>
      <p className="invite-subtitle">{subtitle}</p>
      <p className="invite-date">{dateLabel}</p>
    </section>
  )
}
