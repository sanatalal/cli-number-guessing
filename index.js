#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const results = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    }
]);
if (results.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you have won the game.");
}
else {
    console.log("Sorry! you chose a wrong number. Better luck next time.");
}
;
