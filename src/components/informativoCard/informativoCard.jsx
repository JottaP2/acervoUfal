import Styles from "./InformativoCard.module.css"

export default function InformativoCard({ cardNumber, cardTitle, cardDescription }) {
    return (
    <aside className={Styles.informativoCard}>
        <article className={Styles.card}>
            <div className={Styles.cardNumber}>
                <strong>{cardNumber}</strong>
            </div>
            <div className={Styles.cardContent}>
                <h2>{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </article>
    </aside>
    )
}