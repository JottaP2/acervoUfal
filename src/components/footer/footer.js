import Ufal from '../../assets/logoUfal.png';
import './app-footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <img 
            className="logo-ufal" 
            src={Ufal} 
            alt="Logo da Universidade Federal de Alagoas"
            />
            <p>© 2026 Biblioteca da Ufal Anexo Penedo. Todos os direitos reservados.</p>
        </footer>
    )
}