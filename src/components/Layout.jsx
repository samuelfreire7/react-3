import Header from "./Header";
import Footer from "./Footer";
import RoutePage from "../routes/RoutePage";
import { BrowserRouter } from "react-router-dom";

export default function Layout() {
    return (
        <BrowserRouter>
            <Header />


            <RoutePage />


            <Footer />
        </BrowserRouter>

    );
};