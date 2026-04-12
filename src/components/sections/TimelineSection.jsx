export function TimelineSection({ schedule }) {
  return (
    <section className="invite-section">
      <p className="invite-section-label">Программа дня</p>
      <ul className="invite-timeline">
        {schedule.map((item) => (
          <li key={`${item.time}-${item.title}`}>
            <p className="timeline-time">{item.time}</p>
            <div>
              <p className="timeline-title">{item.title}</p>
              <p className="invite-muted">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
