import Banner from "../../components/banner/Banner"
import LivrosDestaque from "../../components/livrosDestaque/LivrosDestaque"
import InformativoCard from "../../components/informativoCard/informativoCard"
import Styles from "./Inicio.module.css"

const cardData = [
    {
        cardNumber: 1,
        cardTitle: "Pesquise",
        cardDescription: "Digite o nome do livro ou o código na barra de busca."
    },
    {
        cardNumber: 2,
        cardTitle: "Anote o código",
        cardDescription: "Cada livro tem um código único que indica sua posição na estante."
    },
    {
        cardNumber: 3,
        cardTitle: "Retire na biblioteca",
        cardDescription: "Leve o código ao balcão ou vá direto à estante indicada."
    }
]

export default function Inicio() {
    return (
        <main className={Styles.inicioMain}>
            <Banner />
            <LivrosDestaque />

            <article className={Styles.informativoCardsContainer}>
                <div className={Styles.informativoCardsContent}>
                    <h1 className={Styles.informativoTitle}>Como encontrar um livro</h1>

                    {cardData.map((card) => (
                        <InformativoCard
                            key={card.cardNumber}
                            cardNumber={card.cardNumber}
                            cardTitle={card.cardTitle}
                            cardDescription={card.cardDescription}
                        />
                    ))}
                </div>
            </article>
        </main>
    )
}
