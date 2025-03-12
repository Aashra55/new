import inquirer from "inquirer";
let items = [];
let condition = true;
while (condition) {
    let shop = await inquirer.prompt([
        {
            name: 'firstQuestion',
            type: 'input',
            message: 'What would you like to add in your cart?'
        }, {
            name: 'secondQuestion',
            type: 'confirm',
            message: 'Would you like to add more in your cart?',
            default: false
        }
    ]);
    items.push(shop.firstQuestion);
    console.log(items);
    condition = shop.secondQuestion;
}
;
