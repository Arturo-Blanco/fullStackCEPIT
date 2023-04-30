import React from "react";
import './card.css';

const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.nombre}</h2>
            <img key={props.id} src={props.url} alt={props.name}/>
            <h5>{props.species}</h5>
        </div>
    )
}
export default Card
