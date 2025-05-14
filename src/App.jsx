import Destinos from "./pages/Destinos"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import RouterPage from "./routes/RoutePage";

export default function App() {

  return (
    <>
      <nav>
        <Link to="/">Destino</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <RouterPage />
    </>
  );
};
