import heartImg from '../../assets/heart.svg'
import withLoveImg from '../../assets/maket8/tild3363-3332-4163-b232-316264663732_With_love_Katya_and_.svg'
import closingVectorImg from '../../assets/maket8/tild3236-6666-4066-b830-313864333737_Vector.svg'

export function ClosingSection() {
  return (
    <section className="closing-section" aria-label="Финал приглашения">
      <img className="closing-section__heart" src={heartImg} alt="" aria-hidden="true" />
      <img className="closing-section__vector" src={closingVectorImg} alt="" aria-hidden="true" />
      <p className="closing-section__text">С нетерпением ждем вас в наш особенный день.</p>
      <p className="closing-section__names">Вика и Илья</p>
    </section>
  )
}
