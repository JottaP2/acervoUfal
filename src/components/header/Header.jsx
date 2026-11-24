import Styles from "../header/Header.module.css"
import Logo from "../../assets/acervo-digital-logo.png"
import { Search } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const menuLinks = [
    { name: "Início", href: "/", active: true },
    { name: "Livros", href: "/livros" },
    { name: "Sobre", href: "/sobre" }
]

export default function Header() {
    const [busca, setBusca] = useState("")

    function pesquisar(evento) {
        evento.preventDefault()

        const termo = busca.trim()
        if (!termo) return

        console.log("Pesquisar:", termo)
    }

    return (
        <header className={Styles.header}>
            <nav className={Styles.navigation} aria-label="Navegação principal">
                <img src={Logo} alt="Acervo Digital" />

                <ul className={Styles.menu}>
                    {menuLinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={Styles.busca}>
                    <form className={Styles.searchForm} role="search" onSubmit={pesquisar}>
                        <Search className={Styles.searchIcon} size={14} aria-hidden="true" />
                        <input
                            className={Styles.searchInput}
                            type="search"
                            name="q"
                            placeholder="Buscar por nome ou código"
                            aria-label="Pesquisar no acervo"
                            value={busca}
                            onChange={(evento) => setBusca(evento.target.value)}
                        />
                    </form>
                </div>
            </nav>
        </header>
    )
}