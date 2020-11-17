import dice1 from "../../images/1.png";
import dice2 from "../../images/2.png";
import dice3 from "../../images/3.png";
import dice4 from "../../images/4.png";
import dice5 from "../../images/5.png";
const RollDice = (Random_num) => {
  let GessedNumber = document.querySelector(".GessedNumber");
  let cube = document.querySelector(".cube");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const classes = ["front", "right", "black", "left", "top", "bottom"];
  async function RollDice() {
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < classes.length; i++) {
        cube.classList.add("show-" + classes[i]);
        await sleep(50);
        cube.classList.remove("show-" + classes[i]);
      }
    }
    GessedNumber.src = pic[Random_num];
  }
  const pic = [dice1, dice2, dice3, dice4, dice5];

  RollDice();
};
export default RollDice;
