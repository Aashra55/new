import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    const user = await inquirer.prompt([
        {
            name: 'firstQuestion',
            type: 'input',
            message: 'What do you want to add in your list?'
        },
        {
            name: 'secondQuestion',
            type: 'confirm',
            message: 'Do you want to add more in your list?',
            default: false
        }
    ]);
    todo.push(user.firstQuestion);
    console.log(todo);
    condition = user.secondQuestion;
}
;
