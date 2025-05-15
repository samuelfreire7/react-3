import "./CardDestino.css"
import Paris1 from "../assets/Paris1.avif"


export default function CardDestino(props) {
    return (
        <>
        <div className="card">
        <h1>{props.nome}</h1>
        <img src={props.img} alt="" />
        <p>{props.descricao}</p>
        </div>
        </>
    );
};