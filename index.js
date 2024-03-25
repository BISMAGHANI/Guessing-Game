#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) Using input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "num",
        message: "Please guess the number"
    }
]);
if (answers.userGuessedNumber == randomNumber) {
    console.log("Congratulations! You Guessed the Right Number.");
}
else {
    console.log("You Guessed Wrong Number");
}
