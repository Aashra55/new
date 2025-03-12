#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Mathematics marks", type: "number", name: "num1" },
    { message: "Enter Physics marks", type: "number", name: "num2" },
    { message: "Enter Chemistry marks", type: "number", name: "num3" },
    { message: "Enter Computer Science marks", type: "number", name: "num4" },
    { message: "Enter Pakistan Studies marks", type: "number", name: "num5" },
    { message: "Enter Sindhi marks", type: "number", name: "num6" },
    { message: "Enter English marks", type: "number", name: "num7" },
]);
//Statement
console.log("----------------------------------------------------");
console.log("              MARKSHEET OF STANDARD X               ");
console.log("----------------------------------------------------");
console.log("MATHEMATICS        :", answer.num1);
console.log("PHYSICS            :", answer.num2);
console.log("CHEMISTRY          :", answer.num3);
console.log("COMPUTER SCIENCE   :", answer.num4);
console.log("PAKISTAN STUDIES   :", answer.num5);
console.log("SINDHI             :", answer.num6);
console.log("ENGLISH            :", answer.num7);
const TOTALMARKS = 700;
console.log('TOTALMARKS: ', TOTALMARKS);
const MARKSOBTAINED = answer.num1 + answer.num2 + answer.num3 + answer.num4 + answer.num5 + answer.num6 + answer.num7;
console.log('MARKSOBTAINED: ', MARKSOBTAINED);
//Percentage
const PERCENTAGE = MARKSOBTAINED / 700 * 100;
console.log('PERCENTAGE: ', PERCENTAGE);
//Grade
if (PERCENTAGE >= 90) {
    console.log("GRADE        : A-ONE");
}
else if (PERCENTAGE >= 80) {
    console.log("GRADE        : A");
}
else if (PERCENTAGE >= 70) {
    console.log("GRADE        : B");
}
else if (PERCENTAGE >= 60) {
    console.log("GRADE        : C");
}
else if (PERCENTAGE >= 50) {
    console.log("GRADE        : D");
}
else if (PERCENTAGE >= 40) {
    console.log("GRADE        : E");
}
else {
    console.log("FAIL");
}
