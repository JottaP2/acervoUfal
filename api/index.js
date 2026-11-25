import express from "express"
import cors from "cors"
import db from "./database.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API do Acervo funcionando!")
})

app.get("/livros", (req, res) => {
    const livros = db.prepare("SELECT * FROM livros ORDER BY id DESC").all()

    res.json(livros)
    console.log(livros)
})

app.post("/livros", (req, res) => {
    const { titulo, autor, patrimonio, capa } = req.body

    if (!titulo || !autor || !patrimonio) {
        return res.status(400).json({ message: "Preencha título, autor e patrimônio." })
    }

    const existe = db.prepare("SELECT id FROM livros WHERE patrimonio = ?").get(patrimonio)

    if (existe) {
        return res.status(400).json({ message: "Já existe um livro com esse patrimônio." })
    }

    const resultado = db.prepare(`
        INSERT INTO livros (titulo, autor, patrimonio, capa)
        VALUES (?, ?, ?, ?)
    `).run(titulo, autor, patrimonio, capa)

    const novoLivro = db.prepare("SELECT * FROM livros WHERE id = ?").get(resultado.lastInsertRowid)

    res.status(201).json(novoLivro)
})

app.delete("/livros/:id", (req, res) => {
    const id = Number(req.params.id)

    db.prepare("DELETE FROM livros WHERE id = ?").run(id)

    res.status(204).send()
})

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})
