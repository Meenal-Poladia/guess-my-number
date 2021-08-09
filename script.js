'use strict';
let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click",
    function() {
        const guess = Number(document.querySelector(".guess").value);

        // When there is no input
        if (!guess) {
            //document.querySelector(".message").textContent = "Please input a number!"
            displayMessage("Please input a number!");
        }
        // When the guess is equal to the secret number
        else if (guess === secretNumber) {
            //document.querySelector(".message").textContent = "Correct Answer!"
            displayMessage("Correct Answer!");
            document.querySelector(".number").textContent = secretNumber;

           // document.querySelector("body").style.backgroundColor = "#60b347"
            document.querySelector("body").style.backgroundColor = "#edccee"
            document.querySelector(".number").style.width = "30rem"

            if (score > highscore) {
                highscore = score;
                document.querySelector(".highscore").textContent = score;
            }
        }
        //When guess is different
             else if (guess !== secretNumber) {
                if (score > 1) {
                    /*document.querySelector(".message").textContent = guess < secretNumber ?
                        "Too Low!" : "Too High!";
                     */
                    displayMessage(guess < secretNumber ? "Too Low!" : "Too High!");
                    score = score - 1;
                    document.querySelector(".score").textContent = score;
                }
                else {
                    //document.querySelector(".message").textContent = "You have lost the game"
                    displayMessage("You have lost the game");
                    document.querySelector(".score").textContent = 0;
                }
        }

        //When the guess is low
       /* } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too Low!"
                score = score -1;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".message").textContent = "You have lost the game"
                document.querySelector(".score").textContent = 0
            }

            //When the guess is high
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".message").textContent = "Too High!"
                score = score -1;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".message").textContent = "You have lost the game"
                document.querySelector(".score").textContent = 0
            }
        */

    }
)

document.querySelector(".again").addEventListener("click",
    function() {
        secretNumber = Math.trunc((Math.random() * 20) + 1);

        document.querySelector(".score").textContent = 20;
        document.querySelector(".number").textContent = "?";
        //document.querySelector(".message").textContent = "Input a number!";
        displayMessage("Start guessing");
        document.querySelector(".guess").value = "";

        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    }
)
