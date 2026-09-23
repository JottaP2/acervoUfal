import "../bookslib/app-bookslib.css";
import CardLivro from "../ui/cardLivro.js";

const livros = [
    {
        titulo: "Gerenciamento de Pessoas em Projeto",
        autor: "Ana Cláudia Trintenaro Baumotte M",
        codigo: "000001",
        imagem: "https://m.media-amazon.com/images/I/91aXCQ5mGFL.jpg"
    },

    {
        titulo: "Dominando Relatorios - Jasperreports com Ireport",
        autor: "Edson Gonçalves",
        codigo: "000002",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_667163-MLB77012908075_062024-O.webp"
    },

    {
        titulo: "Aprendendo sql",
        autor: "Alan Beaulieu",
        codigo: "123456789",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PPc0Tb2Mo2mJpfWjuJ_KyGZpC0J_ATMx_gordVf0X1uQiTaP3VrSJvGv&s=10"
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