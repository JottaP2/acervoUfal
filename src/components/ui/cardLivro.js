import "./app-cardLivro.css";

export default function CardLivro({ livro }) {
    return (
        <section className="card-livro-container">
            <div className="card-livro">
                <div className="card-livro-imagem">
                    <img src={livro.imagem} alt={livro.titulo} />
                </div>
                
                <div className="card-livro-info">
                    <h3>{livro.titulo}</h3>
                    <p><strong>Autor:</strong> {livro.autor}</p>
                </div>
            </div>
            
        </section>
    );
}   
        