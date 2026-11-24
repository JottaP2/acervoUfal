import Styles from "./LivroCard.module.css"
import { BookOpen } from "lucide-react"

export default function LivroCard({ capa, titulo, autor, patrimonio }) {
    return (
        <article className={Styles.livroCard}>
            <figure className={Styles.capa}>
                {capa
                    ? <img src={capa} alt={`Capa do livro ${titulo}`} loading="lazy" />
                    : (
                        <div className={Styles.capaVazia} aria-hidden="true">
                            <BookOpen size={40} />
                        </div>
                    )}
            </figure>

            <span className={Styles.patrimonio}>
                <span className={Styles.visuallyHidden}>Patrimônio:</span>
                {patrimonio}
            </span>

            <h3 className={Styles.titulo}>{titulo}</h3>
            <p className={Styles.autor}>{autor}</p>
        </article>
    )
}
