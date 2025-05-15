import CardDestino from "./components/CardDestino"
import Paris1 from "../src/assets/Paris1.avif"
import Portofino1 from "../src/assets/Portofino1.jpg"
import Zermatt1 from "../src/assets/Zermatt1.jpg"
import Barcelona1 from "../src/assets/Barcelona1.webp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {

  return (
    <>
    <Header />
      <div className="cards">

        <CardDestino nome="Paris" img={Paris1} descricao="Cidade da França" />
        <CardDestino nome="Portofino" img={Portofino1} descricao="Cidade da Italia" />
        <CardDestino nome="Zermatt" img={Zermatt1} descricao="Cidade da Suíça" />
        <CardDestino nome="Barcelona" img={Barcelona1} descricao="Cidade da Espanha" />
      </div>
      <Footer />
    </>
  );
};
