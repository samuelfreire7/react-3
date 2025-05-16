import { useState } from "react";
import "./Botao2.css"





export default function botao2() {
    const [ativado, setAtivado] = useState(false)

    function alterarEstado() {
        setAtivado(!ativado);
    }
    return (

        <button className={ativado ? "botao-verde" : "botao-vermelho"} onClick={alterarEstado}>

            {ativado ? "Ativado" : "Não Ativado"}
        </button>
    );
};