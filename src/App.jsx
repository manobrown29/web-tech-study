import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/footer"
import Banner from "./Components/Banner"
import Img from "./Components/Img"
import Palmeiras from "./Components/palmeiras"
import MaiorDoBrasil from "./Components/MaiorDoBrasil"

function App() {

  return (
    <>
      <Header />
      <Banner>
        <h1>Bem-Vindo ao site</h1>
        <h2>Aqui vc encontra as melhores ofertas</h2>
      </Banner>

      <Img  caption="New Lorem Ipsum" />

      <Img caption="Doris Lorem Ipsum"/> 

      <Card />

      <Palmeiras caption="Maior do Brasil" anoFundacao="doris" />

   
      

      <MaiorDoBrasil>
        <h1>Maior do brasil </h1>
        <h1>Vamos ser campeão</h1>
      </MaiorDoBrasil>

      <Footer />
    </>
  )
}

export default App
