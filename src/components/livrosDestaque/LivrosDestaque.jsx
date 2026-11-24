import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LivroCard from "../livroCard/LivroCard"
import { API_URL } from "../../api"
import Styles from "./LivrosDestaque.module.css"

export default function LivrosDestaque() {
    const [livros, setLivros] = useState([])

    // Busca os livros na API uma vez, quando a página abre
    useEffect(() => {
        fetch(`${API_URL}/livros`)
            .then((resposta) => resposta.json())
            .then((dados) => setLivros(dados))
            .catch(() => setLivros([]))
    }, [])

    // Só os livros em destaque, no máximo 4
    const destaques = livros.filter((livro) => livro.destaque).slice(0, 4)

    // Sem destaques, a seção não aparece
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
