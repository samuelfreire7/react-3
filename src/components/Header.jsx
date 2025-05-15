import { Link } from "react-router-dom";
import "./Header.css"


export default function Header() {
    return (

        <header>
            <nav>
                <a href="/">Destinos</a>
                <a href="/sobre">Historia</a>
                <a href="/contato">FormContato</a>
            </nav>
        </header>
    );
};