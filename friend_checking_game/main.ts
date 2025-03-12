import inquirer from "inquirer";
const answer = await inquirer.prompt(
    [
        {
            name: "name",
            type: "string",
            message: "Enter your friend's name"
        }
    ]
);

if (
    answer.name === "Ayesha" || answer.name === "Raiba" || answer.name === "Yasna"
){
    console.log(`${answer.name} is your friend`)
}
else{
    console.log(`${answer.name} isn't your friend`)
}
