const currency = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280
};
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name:'from',
        type:'list',
        choices:['USD','EUR','GBP','INR','PKR']
        message:'Select the currency you want to exchange'
    },{
        name:'to',
        type:'list',
        choices:['USD','EUR','GBP','INR','PKR'],
        message:'Selct the currency you want to get'
    },
    {
        name:'amount',
        type:'input',
        message:'Enter the amount'
    }
]);
let currencyFrom = answer.from;
let currencyTo = answer.to;
let amountFrom = currency[answer.from];
let amountTo = currency[answer.to];
let baseAmount = answer.amount/amountFrom;
let value = baseAmount*amountTo;
let user_answer = Math.round(value);
console.log(`${answer.amount} ${currencyFrom} in ${currencyTo} is ${user_answer}`);

