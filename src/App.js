import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Board from './components/board/board.js';
import SearchBox from './components/searchBox/searchBox.js';
import Booklib from './components/bookslib/bookslib.js';
import Acervo from './pages/acervo';

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
        </Routes>
      </main>
    </>
  );
}

export default App;
