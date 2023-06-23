
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

function operation(operator = operator,first=a_number,second=b_number){
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

let a_number = 0;
let operator = "";
let b_number = 0;
const button_value = 
                    [  "Num","Calc","AC","<-",
                       "7","8","9","÷",
                       "4","5","6","x",
                       "1","2","3","-",
                       "0",".","=","+"
                    ]
let class_name = ".main-container-contents";

// Creating the entire list of buttons.
//let divContainer = document.querySelector(container);
//let newDivs = document.createElement("div");

function createColumns(find = class_name,size = 5){
    if (!find){
        console.log("ERROR");
    } else{
        let divContainer = document.querySelector(find);
        for (let i = 1; i <= size; i++){
            let newSpan = document.createElement("span");
            newSpan.classList.add("columns");
            newSpan.classList.add("column" + i);
            //newSpan.innerText = i;
            divContainer.appendChild(newSpan);
        }
    }    
}

function createRow(find = class_name,size=5,row=4){
    let button_column = 0;
    find = "column1";
    for (let i = 1; i <= size; i++){
        let current_find = find.slice(0,-1) + i;
        let buttonContainer = document.getElementsByClassName(current_find)[0];
        for (let k = 1; k <= row; k++){
            let newButton = document.createElement("span");
            
            let nbtn = document.createElement("buttons");
            newButton.classList.add("rows");
            newButton.classList.add("rowIndex" + k);
            nbtn.classList.add("buttons");
            nbtn.innerText = button_value[button_column+k - 1];
            //console.log(button_value[k]);
            newButton.appendChild(nbtn);
            buttonContainer.appendChild(newButton);
            //button_column = button_column + 4;
        }
        // Button values go to the next column
        button_column = i * 4;
    }
}

function createCalculator(){
    createColumns();
    createRow();
}



/*
for (button in button_value){
    a_number +=1;
    console.log(button_value[button] + " " + a_number);
}   
*/                 
createCalculator();