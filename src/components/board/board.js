import logoAcervo from '../../assets/logoAcervo.svg';
import '../board/app-board.css';

export default function Board() {
    return (
        <section className="boardLogo">
          <img className="boardLogo-img" src={logoAcervo} alt="Logo da Biblioteca"></img>
        </section>
    );
}