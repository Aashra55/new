#! /usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let Tasks = await inquirer.prompt([
        {
            name: "addTask",
            type: "input",
            message: "What do you want to add in your list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Are you sure you want to add more in your list?",
            default: "false"
        }
    ]);
    list.push(Tasks.addTask);
    condition = Tasks.addMore;
    console.log(list);
}
;
