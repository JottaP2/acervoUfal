import './App.css';
import Header from './components/header/header.js';
import Board from './components/board/board.js';
import SearchBox from './components/searchBox/searchBox.js';
import Booklib from './components/bookslib/bookslib.js';

function App() {
  return (
    <>
      <Header />
        <main className="main-app">
          <Board />
          <SearchBox />
          <Booklib />
        </main>
    </>
  );
}

export default App;
