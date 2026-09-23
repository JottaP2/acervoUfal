import "../components/bookslib/app-bookslib.css";
import CardLivro from "../components/ui/cardLivro.js";

const livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },

    {
        titulo: "1984",
        autor: "George Orwell",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },

    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"
    },
    {
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"
    },

    {
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        codigo: "123456789",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"
    }
];


export default function Acervo() {
    return (
        <main>
            <div>
                <h1>Acervo</h1>
                <p>Bem-vindo ao acervo da biblioteca!</p>
            </div>

                    <section className="booklib-container">
                        {livros.map((livro, index) => (
                            <CardLivro key={index} livro={livro} />
                        ))}
                    </section>
        </main>
    );
}