import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import { API_URL } from "../api"
import Styles from "./Admin.module.css"

export default function Admin() {
    const [livros, setLivros] = useState([])
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [patrimonio, setPatrimonio] = useState("")
    const [capa, setCapa] = useState("")
    const [mensagem, setMensagem] = useState("")

    function buscarLivros() {
        fetch(`${API_URL}/livros`)
            .then((resposta) => resposta.json())
            .then((dados) => setLivros(dados))
            .catch(() => setMensagem("Não foi possível carregar os livros. A API está rodando?"))
    }

    useEffect(() => {
        buscarLivros()
    }, [])

    function limparFormulario() {
        setTitulo("")
        setAutor("")
        setPatrimonio("")
        setCapa("")
    }

    function adicionarLivro() {
        if (titulo === "" || autor === "" || patrimonio === "") {
            setMensagem("Preencha título, autor e patrimônio.")
            return
        }

        if (livros.some((livro) => livro.patrimonio === patrimonio)) {
            setMensagem("Já existe um livro com esse patrimônio.")
            return
        }

        const novoLivro = { titulo, autor, patrimonio, capa }

        fetch(`${API_URL}/livros`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoLivro)
        })
            .then(() => {
                setMensagem(`"${titulo}" foi adicionado!`)
                limparFormulario()
                buscarLivros()
            })
            .catch(() => setMensagem("Não foi possível salvar o livro."))
    }

    function removerLivro(livro) {
        if (!window.confirm(`Remover "${livro.titulo}"?`)) return

        fetch(`${API_URL}/livros/${livro.id}`, { method: "DELETE" })
            .then(() => buscarLivros())
            .catch(() => setMensagem("Não foi possível remover o livro."))
    }

    return (
        <main className={Styles.adminMain}>
            <h1 className={Styles.titulo}>Administração do acervo</h1>
            <p className={Styles.subtitulo}>
                Cadastre livros para que apareçam na página inicial e na página Livros.
            </p>

            <section className={Styles.cadastro}>
                <div className={Styles.formulario}>
                    <h2 className={Styles.secaoTitulo}>Novo livro</h2>

                    <label className={Styles.campo}>
                        Título *
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </label>

                    <label className={Styles.campo}>
                        Autor *
                        <input value={autor} onChange={(e) => setAutor(e.target.value)} />
                    </label>

                    <label className={Styles.campo}>
                        Patrimônio *
                        <input
                            value={patrimonio}
                            onChange={(e) => setPatrimonio(e.target.value)}
                            placeholder="Ex.: 000128"
                        />
                    </label>

                    <label className={Styles.campo}>
                        URL da capa
                        <input
                            value={capa}
                            onChange={(e) => setCapa(e.target.value)}
                            placeholder="https://..."
                        />
                    </label>

                    {mensagem && <p className={Styles.mensagem}>{mensagem}</p>}

                    <button className={Styles.botaoPrimario} onClick={adicionarLivro}>
                        Adicionar livro
                    </button>
                </div>
            </section>

            <section className={Styles.lista}>
                <h2 className={Styles.secaoTitulo}>Livros cadastrados ({livros.length})</h2>

                {livros.length === 0 && <p className={Styles.vazio}>Nenhum livro cadastrado.</p>}

                <ul className={Styles.itens}>
                    {livros.map((livro) => (
                        <li key={livro.id} className={Styles.item}>
                            <div className={Styles.itemCapa}>
                                {livro.capa && <img src={livro.capa} alt="" />}
                            </div>

                            <div className={Styles.itemInfo}>
                                <strong>{livro.titulo}</strong>
                                <span>{livro.autor}</span>
                                <span>Patrimônio {livro.patrimonio}</span>
                            </div>

                            <button
                                className={Styles.botaoRemover}
                                onClick={() => removerLivro(livro)}
                                title="Remover"
                            >
                                <Trash2 size={18} />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
