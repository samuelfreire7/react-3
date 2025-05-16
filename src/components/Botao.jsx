import { useState } from "react";
import "./Botao.css"



export default function botao() {
    const [clicado, setClicado] = useState(false);

    function alternarEstado() {
        setClicado(!clicado);
    }
    return(

        <button className={clicado ? "botao-verde" : "botao-vermelho"} onClick={alternarEstado}>

            {clicado ? "Clicado" : "Não Clicado"}
        </button>
    );
};
