import Ufal from '../../assets/logoUfal.png';
import insta from '../../assets/instagram.png';
import './app-header.css';

export default function Header() {
  return (
    <header className="header-container">
        <img className="logo-ufal" src={Ufal} alt="Logo da Universidade Federal de Alagoas" />
        <nav className="navegation">
            <ul className="navegation-list">
                <li className="navegation-item"><a href="#">Início</a></li>
                <li className="navegation-item"><a href="#">Acervo</a></li>
                <li className="navegation-item"><a href="#">Contato</a></li>
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