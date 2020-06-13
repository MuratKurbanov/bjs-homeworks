"use strict"
function getResult(a,b,c){
    let discriminant = b**2 - 4 * a * c;
    let x = [];
    
    if(discriminant == 0){
        x[0] = -b/(2*a);
    }
    else if(discriminant > 0){
        x[0] = (-b + Math.sqrt(discriminant))/(2 * a);
        x[1] = (-b - Math.sqrt(discriminant))/(2 * a);
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;
    if (marks.length == 0){
        return 0;
    } else if (marks.length > 5){
        console.log('Оценок слишком много, они не будут учитываться!🧐');
        marks.splice(0.5);
    }
    for(let i = 0; i < marks.length; i++){
        sum += marks[i];
        averageMark = sum/marks.length;
    }
    return averageMark;
}


function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear()-18;
    if (dateOfBirthday.getFullYear() > year) {
        return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    } else {
        return(`Не желаете ли олд-фэшн, ${name} ?`)
    } 
}