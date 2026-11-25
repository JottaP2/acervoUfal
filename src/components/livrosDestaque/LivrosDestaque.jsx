import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LivroCard from "../livroCard/LivroCard"
import { API_URL } from "../../api"
import Styles from "./LivrosDestaque.module.css"

export default function LivrosDestaque() {
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/livros`)
            .then((resposta) => resposta.json())
            .then((dados) => setLivros(dados))
            .catch(() => setLivros([]))
    }, [])

    const destaques = livros.slice(0, 4)

    if (destaques.length === 0) return null

    return (
        <section className={Styles.destaqueSection}>
            <div className={Styles.destaqueContent}>
                <div className={Styles.cabecalho}>
                    <h2 className={Styles.titulo}>Livros em destaque</h2>
                    <Link to="/livros" className={Styles.verTodos}>Ver todos →</Link>
                </div>

                <ul className={Styles.grade}>
                    {destaques.map((livro) => (
                        <li key={livro.id}>
                            <LivroCard
                                capa={livro.capa}
                                patrimonio={livro.patrimonio}
                                titulo={livro.titulo}
                                autor={livro.autor}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
