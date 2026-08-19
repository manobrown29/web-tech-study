import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/footer"
import Banner from "./Components/Banner"

function App() {

  return (
    <>
      <Header />

      <Banner>
        <h1>Bem-Vindo ao site</h1>
        <h2>Aqui vc encontra as melhores ofertas</h2>
      </Banner>

      <Card />

      <Footer />
    </>
  )
}

export default App
