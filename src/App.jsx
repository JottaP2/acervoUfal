import Header from "./components/header/Header"
import InformativoCard from "./components/informativoCard/informativoCard"
import "./App.css"

function App() {

  return (
    <>
      <Header />
      <main className="mainContainer">
        <section className="informativoSection">
          <article className="informativoCards">
          <InformativoCard cardNumber="1" cardTitle="Informativo" cardDescription="Este é um informativo de teste" />
          <InformativoCard cardNumber="1" cardTitle="Informativo" cardDescription="Este é um informativo de teste" />
          <InformativoCard cardNumber="1" cardTitle="Informativo" cardDescription="Este é um informativo de teste" />
          </article>
        </section>
      </main>
    </>
  )
}

export default App
