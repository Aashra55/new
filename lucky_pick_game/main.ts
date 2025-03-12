#! /usr/bin/env node

//  a = 2;           //  f = 6;
//  b = 5;           //  g = 8;
//  c = '☠';        //  h = 3;
//  d = 1;           //  i = '☠';
//  e = '☠';

import inquirer from "inquirer";
console.log(
    `
     a,b,c,
     d,e,f,
     g,h,i
     `
);
let choose = await inquirer.prompt(
    [
        {
            message:'Choose any one alphabet',
            type:'input',
            name:'pick',

        }
    ]
);
if(choose.pick === 'a'){
    console.log(2);
    console.log('Congrats you won!')
}else if(choose.pick === 'b'){
    console.log(5);
    console.log('Congrats you won!')
}else if(choose.pick === 'c'){
    console.log('☠');
    console.log('You lose')
}else if(choose.pick === 'd'){
    console.log(1);
    console.log('Congrats you won!')
}else if(choose.pick === 'e'){
    console.log('☠');
    console.log('You lose')
}else if(choose.pick === 'f'){
    console.log(6);
    console.log('Congrats you won!')
}else if(choose.pick === 'g'){
    console.log(8);
    console.log('Congarats you won!')
}else if(choose.pick === 'h'){
    console.log(3);
    console.log('Congrats you won!')
}else if(choose.pick === 'i'){
    console.log('☠');
    console.log('You lose')
}else{
    console.log('Please pick an alphabet')
};

