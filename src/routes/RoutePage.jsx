import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destinos from "../pages/Destinos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Layout from "../components/Layout";

export default function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Destinos />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Contato" element={<Contato />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};