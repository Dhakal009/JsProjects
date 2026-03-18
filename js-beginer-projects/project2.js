const prompt = require("prompt-sync")()
function getNumber(numberString){
    while(true){
    const number = parseFloat(prompt(`Enter a number${numberString}: `))
    if(isNaN(number)){
        console.log("Invalid Input")
    }else{
        return number;
    }
  }
}

const number1 = getNumber("One")
const number2 = getNumber("Two")
const operator = prompt("enter sign: ")
let result;
let valid = true;
switch(operator){
    case "+":
            result = number1+number2
            break;
    case "-":
            result = number1-number2
            break;  
    case "*":
            result = number1*number2
            break;
    case "/":
            if(number2 === 0){
                valid = false
                console.log("Zero division error")
            }
            result = number1/number2
            break;
    default:
            console.log("invalid input..")
            valid = false
            break;
}

if(valid) console.log(`${number1} ${operator} ${number2} = ${result}`)


