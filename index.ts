#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "num",
        message: "Please guess the number"
    }
]);

if(answers.userGuessedNumber == randomNumber ){
    console.log("Congratulations! You Guessed the Right Number.");
}else{
    console.log("You Guessed Wrong Number");
}