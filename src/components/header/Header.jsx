import Styles from "../header/Header.module.css"
import Logo from "../../assets/acervo-digital-logo.png"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const menuLinks = [
    { name: "Início", href: "/" },
    { name: "Livros", href: "/livros" },
    { name: "Sobre", href: "/sobre" }
]

export default function Header() {
    const [busca, setBusca] = useState("")
    const [menuAberto, setMenuAberto] = useState(false)

    function pesquisar(evento) {
        evento.preventDefault()

        const termo = busca.trim()
        if (!termo) return

        console.log("Pesquisar:", termo)
    }

    return (
        <header className={Styles.header}>
            <nav className={Styles.navigation} aria-label="Navegação principal">
                <NavLink to="/" className={Styles.logo} onClick={() => setMenuAberto(false)}>
                    <img src={Logo} alt="Acervo Digital - página inicial" />
                </NavLink>

                <button
                    className={Styles.menuButton}
                    type="button"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    onClick={() => setMenuAberto((aberto) => !aberto)}
                >
                    {menuAberto
                        ? <X size={24} aria-hidden="true" />
                        : <Menu size={24} aria-hidden="true" />}
                </button>

                <ul
                    id="menu-principal"
                    className={`${Styles.menu} ${menuAberto ? Styles.menuOpen : ""}`}
                >
                    {menuLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.href}
                                end
                                className={({ isActive }) => (isActive ? Styles.active : undefined)}
                                onClick={() => setMenuAberto(false)}
                            >
                                {link.name}
                            </NavLink>
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
