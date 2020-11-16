var cube = document.querySelector(".cube");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const classes = ["front", "right", "black", "left", "top", "bottom"];
async function RollDice() {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < classes.length; i++) {
      cube.classList.add("show-" + classes[i]);
      await sleep(50);
      cube.classList.remove("show-" + classes[i]);
    }
  }
}

RollDice();
