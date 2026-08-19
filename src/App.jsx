import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/footer"
import Banner from "./Components/Banner"
import Img from "./Components/Img"
import Palmeiras from "./Components/palmeiras"
import MaiorDoBrasil from "./Components/MaiorDoBrasil"

import "../src/App.css"
function App() {
  return (
    <>
      <Header />
      <Banner>
        <h1>Bem-Vindo ao site</h1>
        <h1>Aqui vc encontra as melhores imagens</h1>
      </Banner>

      <Img  caption="New Lorem Ipsum" />

      <Img caption="Doris Lorem Ipsum"/> 

      <Card />

      <Palmeiras caption="Maior do Brasil" anoFundacao="dori"/>

      <Palmeiras caption="Maior do mundo" anoFundacao="nemo"/>

      <MaiorDoBrasil>
        <h1 className="titulo">Maior do brasil </h1>
        <h1 className="titulo">Vamos ser campeão</h1>
      </MaiorDoBrasil>

      <Footer />
    </>
  )
}

export default App
