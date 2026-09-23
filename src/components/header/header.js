import Ufal from '../../assets/logoUfal.png';
import insta from '../../assets/instagram.png';
import './app-header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header-container">
            <img className="logo-ufal" src={Ufal} alt="Logo da Universidade Federal de Alagoas" />
            <nav className="navegation">
                <ul className="navegation-list">
                    <li className="navegation-item">
                        <Link to="/">Início</Link>
                    </li>

                    <li className="navegation-item">
                        <Link to="/acervo">Acervo</Link>
                    </li>

                    <li className="navegation-item">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>

            <div className="insta-icon">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" />
                </a>
            </div>
        </header>
    );
}