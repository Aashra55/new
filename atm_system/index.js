import inquirer from "inquirer";
let myBalance = 1040000;
const myPin = 4567;
let pinAns = await inquirer.prompt([
    {
        message: "Enter you pin",
        type: "number",
        name: "pin"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin ✅");
    let operationAns = await inquirer.prompt([
        {
            message: "What do you want to do?",
            type: "list",
            name: "operator",
            choices: ["Withdraw", "Check Balance", "Deposit", "Fast Cash"]
        }
    ]);
    if (operationAns.operator === "Withdraw") {
        let withdrawalAns = await inquirer.prompt([
            {
                message: "Enter the amount you want to withdraw",
                name: "withdrawal",
                type: "number"
            }
        ]);
        myBalance -= withdrawalAns.withdrawal;
        console.log("Your remaining balance is " + myBalance);
    }
    else if (operationAns.operator === "Check Balance") {
        console.log("Your balance is " + myBalance);
    }
    else if (operationAns.operator === "Deposit") {
        let depositAns = await inquirer.prompt([
            {
                message: "Enter the Amount you want to deposit",
                name: "deposit",
                type: "number"
            }
        ]);
        myBalance += depositAns.deposit;
        console.log("Your current balance is " + myBalance);
    }
    else if (operationAns.operator === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                message: "Select the amount you want to withdraw",
                type: "list",
                name: "FastCash",
                choices: [500, 1000, 5000, 10000]
            }
        ]);
        if (fastCashAns.FastCash === 500) {
            myBalance -= 500;
            console.log("Your remaining balance is " + myBalance);
        }
        else if (fastCashAns.FastCash === 1000) {
            myBalance -= 1000;
            console.log("Your remaining balance is " + myBalance);
        }
        else if (fastCashAns.FastCash === 5000) {
            myBalance -= 5000;
            console.log("Your remaining balance is " + myBalance);
        }
        else if (fastCashAns.FastCash === 10000) {
            myBalance -= 10000;
            console.log("Your remaining balance is " + myBalance);
        }
    }
}
else {
    console.log("Incorrect Pin❌");
}
