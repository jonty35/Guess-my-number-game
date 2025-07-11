"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const showMassage = function (msg) 
{
   document.querySelector(".start").textContent = msg;
}

document.querySelector(".btn-check").addEventListener("click", function () {

    const add = Number(document.querySelector(".add").value);
    if (!add) {
        showMassage("No Number");
        document.querySelector(".high-score").textContent = "0";
    }
    else if (add === number) {
        document.querySelector(".number").textContent = number;
        showMassage("Correct Answer..")
        document.querySelector("body").style.backgroundImage = "linear-gradient(to right , rgba(227,207,57,1)  , green)";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".high-score").textContent = highScore;

        }
    }
    else if (add !== number) {
        if (score > 1) {
            showMassage(add > number ? "To High" : "To Low");
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            showMassage("You Lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }

});
 

document.querySelector(".btn-again").addEventListener("click", function () {

    score = 20;
    showMassage("Start Guessing....");
    document.querySelector("body").style.backgroundImage = "none";

    document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".add").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";

})