import { useEffect, useState } from "react"
import LivroCard from "../../components/livroCard/LivroCard"
import { API_URL } from "../../api"
import Styles from "./Livros.module.css"

export default function Livros() {
    const [livros, setLivros] = useState([])
    const [mensagem, setMensagem] = useState("Carregando livros...")

    useEffect(() => {
        fetch(`${API_URL}/livros`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                setLivros(dados)
                setMensagem(dados.length === 0 ? "Nenhum livro cadastrado." : "")
            })
            .catch(() => setMensagem("Não foi possível carregar os livros. A API está rodando?"))
    }, [])

    return (
        <main className={Styles.livrosMain}>
            <h1 className={Styles.titulo}>Livros</h1>

            {mensagem && <p className={Styles.mensagem}>{mensagem}</p>}

            <ul className={Styles.grade}>
                {livros.map((livro) => (
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
        </main>
    )
}
