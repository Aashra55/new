#! /usr/env/node
import inquirer from "inquirer";
const user = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'Enter your sentence'
});
const words = user.sentence;
const array = words.trim().split(" ");
// console.log('array: ', array);
console.log(`Your sentence consists of ${array.length} words`);
