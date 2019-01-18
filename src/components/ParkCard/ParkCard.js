import React from "react";
import "./ParkCard.css";

const ParkCard = props => (
  <div 
    id={props.id}
    value={props.id}
    className="card"
    onClick={()=> props.handleClick(props.id)}>
    <div className="imgContainer">
      <h5>{props.name}</h5>
      <img className="imag" alt={props.name} src={props.image}/>
    </div>
  </div>
);

export default ParkCard;