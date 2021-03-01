'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // contribution = 0; // первоначальный взнос
    // amount = 50000; // сумма кредита
    // date = (new Date().getMonth()); // срок в месяцах
    // let s = amount - contribution; // сумма кредита - первоначальный взнос
    // let p = (percent/100)/12;
  let S = 50000 - 0;
  let P = 10 / 100 / 12;
  let n = 12;
  let freeAmount = S * (P + P / ((Math.pow(1 + P, n)) - 1));

    // let formAmount = s * (p + p / ((Math.pow(1 + p, date)) - 1));
    // let formAmount = s * (percent + percent / ((Math.pow(1 + p, date)) - 1));

  console.log(+freeAmount.toFixed(2));
  
  let totalAmount = 0 + (freeAmount * n);

  return +totalAmount.toFixed(2);
}


function getGreeting(name) {
    // код для задачи №2 писать здесь

    if (name === undefined || name === null || name === '') {
        console.log('Привет, мир! Меня зовут Аноним.');
        return 'Привет, мир! Меня зовут Аноним.';
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    }
}


// function getGreeting(name) {
//     // код для задачи №2 писать здесь

//     if (name) {
//         console.log(`Привет, мир! Меня зовут ${name}.`);
//         return `Привет, мир! Меня зовут ${name}.`;
//     } else {
//         console.log('Привет, мир! Меня зовут Аноним.');
//         return 'Привет, мир! Меня зовут Аноним.';
//     }
// }

// function calculateTotalMortgage(percent, contribution, amount, date) {
//     // код для задачи №1 писать здесь
//     // contribution = 0; // первоначальный взнос
//     // amount = 50000; // сумма кредита
//     date = (new Date().getMonth()); // срок в месяцах
//     let s = amount - contribution; // сумма кредита - первоначальный взнос
//     let p = (percent/100)/12;

//     // let formAmount = s * (p + p / ((Math.pow(1 + p, date)) - 1));
//     let formAmount = s * (percent + percent / ((Math.pow(1 + p, date)) - 1));

    
//     console.log(formAmount);

//     let = totalAmount = formAmount / 100;

//     return +totalAmount.toFixed(2);
// }

// function calculateTotalMortgage(percent, contribution, amount, date) {
//     // код для задачи №1 писать здесь
//     let contribution = 0; // первоначальный взнос
//     let amount = 50000; // сумма кредита
//     let date = new Date().getMonth(); // срок в месяцах
    
//     let percent = 10; // процентной ставки
//     let firstAmount = amount - contribution; // сумма кредита - первоначальный взнос

//     let totalAmount = firstAmount * (percent + percent / (((1 + percent) Math.pow(date)) - 1));
    
//     console.log(totalAmount);

//     return totalAmount;
// }

// let noName = 'Аноним';
// if (name.length === 0);

// function getGreeting(name) {
//     // код для задачи №2 писать здесь
//     let name;
//     let noName = 'Аноним';
//     if (name == undefined || name == null || name == '') {
//         console.log(`Привет, мир! Меня зовут ${noName}`);
//     } else {
//         console.log(`Привет, мир! Меня зовут ${name}`);
//     }
//     //return getgreeting;
}