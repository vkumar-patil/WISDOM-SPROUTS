const box = document.querySelectorAll(".box");
const statustext = document.querySelector("#statustext");
const restartbtn = document.querySelector("#restartbtn");
let turnO = true;
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8],
];
let options = ["", "", "", "", "", "", "", "", ""];
box.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("o");
    box.textContent = "O";
    if (turnO) {
      box.textContent = "O";
      turnO = false;
    } else {
      box.textContent = "X";
      turnO = true;
    }
    box.style.pointerEvent = "none";
    checkwinner();
  });
});
let checkwinner = () => {
  for (pattern of winConditions) {
    let a1 = box[pattern[0]].textContent;
    let a2 = box[pattern[1]].textContent;
    let a3 = box[pattern[2]].textContent;
    if (a1 !== "" || a2 !== "" || a3 == "") {
      if (a1 === a2 && a2 === a3) {
        statustext.textContent = `${a1} is the winner!`;
        return;
      }
    }
  }
};

// let currentPlayer = "X";
// let running = false;
// initialzeGame();
// function initialzeGame() {
//   box.forEach((box) => box.addEventListener("click", clickedbox));
//   restartbtn.addEventListener("click", restartGame);
//   statustext.textContent = `${currentPlayer}'s turn`;
//   running = true;
// }
// function clickedbox() {
//   const boxIndex = this.getAttribute("boxIndex");
//   if (options[boxIndex] != "" || !running) {
//     return;
//   }
//   updatebox(this, boxIndex);
//   chekwinner();
// }

// function updatebox(box, index) {
//   options[index] = currentPlayer;
//   box.textContent = currentPlayer;
// }
// function chengPlayer() {}
// function chekwinner() {}
// function restartGame() {}
