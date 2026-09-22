import "../bookslib/app-bookslib.css";
import CardLivro from "../ui/cardLivro.js";

const livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },

    {
        titulo: "1984",
        autor: "George Orwell",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },

    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"
    },
];

export default function bookslib() {
    return (
        <section className="booklib-container">
            {livros.map((livro, index) => (
                <CardLivro key={index} livro={livro} />
            ))}
        </section>
    );
}