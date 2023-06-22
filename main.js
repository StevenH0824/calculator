
function add (a=a_number,b=b_number){
    return a +b;
}

function subtract(a=a_number,b=b_number){
    return a - b;
}

function multiply(a=a_number,b=b_number){
    return a * b;
}

function divide(a=a_number,b=b_number){
    if (b == 0){
        return 0;
    }
    return a / b;
}


let a_number = 0;
let operator = "";
let b_number = 0;


function operator(operator,first=a_number,second=b_number){
    switch (operator){
        case "+":
            add();
            break;
        case "-":
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
    }
}