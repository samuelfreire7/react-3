import { useState } from "react";
import "./Botao3.css"





export default function botao2() {
    const [mostrar, setMostrar] = useState(false)

    function alterarEstado() {
        setAtivado(!mostrar);
    }
    return (
        <>
        <p>{mostrar? "werwer": null}</p>
        <button className={mostrar ? "botao-verde" : "botao-vermelho"} onClick={alterarEstado}>

            {mostrar ? "Samuel" : ""}
        </button>
        </>
    );
};