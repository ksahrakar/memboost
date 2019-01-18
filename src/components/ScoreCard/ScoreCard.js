import React from "react";
import "./ScoreCard.css";


const ScoreCard = props => {
  return(
    <div className="card SCbody">
      <div>
        <h3>Current Score: {props.score}</h3>
        <h5 className="msg">{props.message}</h5>
        <h5>Top Score: {props.topScore}</h5>
        <h5>Games Played: {props.gamesPlayed}</h5>
      </div>
    </div>
  )
};

export default ScoreCard;