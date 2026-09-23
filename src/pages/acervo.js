import "../components/bookslib/app-bookslib.css";
import CardLivro from "../components/ui/cardLivro.js";

const livros = [
    {
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        codigo: "000001",
        imagem: "https://m.media-amazon.com/images/I/91hUer84PpL.jpg"
    },
    {
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        codigo: "000002",
        imagem: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg"
    },
    {
        titulo: "Código Limpo",
        autor: "Robert C. Martin",
        codigo: "000003",
        imagem: "https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg"
    },
    {
        titulo: "The Pragmatic Programmer",
        autor: "David Thomas e Andrew Hunt",
        codigo: "000004",
        imagem: "https://m.media-amazon.com/images/I/71f1jieYHNL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Python Fluente",
        autor: "Luciano Ramalho",
        codigo: "000005",
        imagem: "https://m.media-amazon.com/images/I/51ZdDlk6OIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Automatize Tarefas Maçantes com Python",
        autor: "Al Sweigart",
        codigo: "000006",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd831Yj_hPIfwc8Xtd29mhXLuLiUdofVaa7NIjHsf2fHeYgHCUhPZgRs&s=10"
    },
    {
        titulo: "Entendendo Algoritmos",
        autor: "Aditya Y. Bhargava",
        codigo: "000007",
        imagem: "https://m.media-amazon.com/images/I/81RXMnEXrdL.jpg"
    },
    {
        titulo: "Estruturas de Dados e Algoritmos em JavaScript",
        autor: "Loiane Groner",
        codigo: "000008",
        imagem: "https://m.media-amazon.com/images/I/71KGa1y8eaL.jpg"
    },
    {
        titulo: "Introdução à Computação",
        autor: "George Beekman",
        codigo: "000009",
        imagem: "https://m.media-amazon.com/images/I/41RzMCJyqZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "C Completo e Total",
        autor: "Herbert Schildt",
        codigo: "000010",
        imagem: "https://m.media-amazon.com/images/I/61tOGgwfpNL.jpg"
    },
    {
        titulo: "Use a Cabeça! Java",
        autor: "Kathy Sierra e Bert Bates",
        codigo: "000011",
        imagem: "https://m.media-amazon.com/images/I/61jzaHuWFLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Use a Cabeça! HTML e CSS",
        autor: "Eric Freeman e Elisabeth Robson",
        codigo: "000012",
        imagem: "https://m.media-amazon.com/images/I/71a3ovrWSAL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Eloquent JavaScript",
        autor: "Marijn Haverbeke",
        codigo: "000013",
        imagem: "https://eloquentjavascript.net/img/cover.jpg"
    },
    {
        titulo: "React Up and Running",
        autor: "Stoyan Stefanov",
        codigo: "000014",
        imagem: "https://m.media-amazon.com/images/I/91p+riY2nPL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Aprendendo Node.js",
        autor: "Shelly Powers",
        codigo: "000015",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQo9DTEcShg1Cyr2ylJRio8xayi01G5w89JsbI05mWAQ&s"
    },
    {
        titulo: "Programação Orientada a Objetos",
        autor: "Robert Lafore",
        codigo: "000016",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3GMBdp15qGNkHI6hr5Ug6yk3umgviJ-1Qq177ujAcsP1pPqBqYIZ-tgd&s=10"
    },
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