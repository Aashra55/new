import inquirer from "inquirer";
console.log(`
    1️⃣ 2️⃣ 3️⃣
    4️⃣ 5️⃣ 6️⃣
    7️⃣ 8️⃣ 9️⃣
    `);
const pick = await inquirer.prompt({
    message: 'Select any one number',
    name: 'select',
    type: 'number'
});
if ((pick.select === 1) ||
    (pick.select === 2) ||
    (pick.select === 4) ||
    (pick.select === 5) ||
    (pick.select === 7) ||
    (pick.select === 9)) {
    console.log('💗');
    console.log('Congrats you won!');
}
else if ((pick.select === 3) ||
    (pick.select === 6) ||
    (pick.select === 8)) {
    console.log('☠');
    console.log('You lose');
}
else {
    console.log('Please select a number');
}
;
