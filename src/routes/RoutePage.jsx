import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destinos from "../pages/Destinos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

export default function RouterPage() {
    return (
        <BrowserRouter>
        <Routes>
        <Route index path="/" element={<Destinos />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Contato" element={<Contato />} />
        </Routes>
        </BrowserRouter>
    );
};