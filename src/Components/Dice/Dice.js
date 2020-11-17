import React, { useEffect } from "react";
import "./Dice.css";
import dice1 from "../../images/1.png";
import dice2 from "../../images/2.png";
import dice3 from "../../images/3.png";
import dice4 from "../../images/4.png";
import dice5 from "../../images/5.png";
import io from "socket.io-client";
import RollDice from "./rollDice";
let socket;
const Dice = (props) => {
  useEffect(() => {
    socket = io("http://localhost:5000");
    socket.on("rollDice", ({ Random_num }) => {
      RollDice(Random_num);
    });
  });
  const onDiceClicked = () => {
    console.log("dice clicked");
    socket.emit("diceClicked");
  };

  return (
    <div className="scene">
      <div className="cube" onClick={onDiceClicked}>
        <div className="cube__face cube__face--front">
          <img
            src={dice1}
            className="GessedNumber"
            alt="Dice GessedNumber"
          ></img>
        </div>
        <div className="cube__face cube__face--back">
          <img src={dice2} alt="Dice"></img>
        </div>
        <div className="cube__face cube__face--right">
          <img src={dice3} alt="Dice"></img>
        </div>
        <div className="cube__face cube__face--left">
          <img src={dice4} alt="Dice"></img>
        </div>
        <div className="../../../public/assets/images/1.png">
          <img src={dice5} alt="Dice"></img>
        </div>
      </div>
    </div>
  );
};
export default Dice;
