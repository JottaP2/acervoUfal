import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Inicio from "./pages/Inicio/Inicio"
import Livros from "./pages/Livros/Livros"
import Sobre from "./pages/Sobre"
import Admin from "./admin/Admin"
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
