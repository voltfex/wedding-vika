const IPHONE_14_PRO_MAX = {
  width: 430,
}

export function MobileInvitationFrame({ children }) {
  return (
    <main className="invite-page">
      <section
        className="invite-container"
        style={{
          '--container-width': `${IPHONE_14_PRO_MAX.width}px`,
        }}
      >
        <div className="invite-content">{children}</div>
      </section>
    </main>
  )
}
