#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*10 + 1);
const answer = await inquirer.prompt(
    {
        message:"Please guess a number between 1-10",
        type:"number",
        name:"userGuessedNumber",
    }
);
//condition
if(
    answer.userGuessedNumber === randomNumber
){
    console.log("Congratulations! You guessed right number😃")
}
else{
    console.log("Oops! You Lose💀")
};