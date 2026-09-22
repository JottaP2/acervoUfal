import './app-searchbox.css';
import arrow from '../../assets/arrow.svg';

export default function SearchBox() {
    return (
        <section className="search-container">
            <form action="/buscar" method="get" id="search-form">
                <input type="search" id="campo-busca" name="q" placeholder="Digite sua busca..." />
                <button id="botao-busca" type="submit">Buscar</button>
            </form>

            <div className="page-link">
                <a href="#">Ver acervo completo</a>
                <img src={arrow} alt="livros" />
            </div>
        </section>
    );
}