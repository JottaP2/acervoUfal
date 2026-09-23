import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Board from './components/board/board.js';
import SearchBox from './components/searchBox/searchBox.js';
import Booklib from './components/bookslib/bookslib.js';
import Acervo from './pages/acervo';
import Sobre from './pages/sobre';
import Footer from './components/footer/footer.js';

function Inicio() {
  return (
    <>
      <Board />
      <SearchBox />
      <Booklib />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="main-app">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
