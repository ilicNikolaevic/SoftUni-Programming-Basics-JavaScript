function operations(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let operator = input[2];
    let type = "";
    
    switch (operator) {
        case "+":

            if ((firstNum + secondNum) % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum} - ${type}`);
            break;

        case "-":
            if ((firstNum - secondNum) % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum} - ${type}`);
            break;

        case "*":
            if ((firstNum * secondNum) % 2 === 0) {
                type = "even";
            } else {
                type = "odd";
            }
            console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum} - ${type}`);
            break;
            
        case "/":
            if (secondNum !== 0){
                console.log(`${firstNum} / ${secondNum} = ${(firstNum / secondNum).toFixed(2)}`)
            } else {
                console.log(`Cannot divide ${firstNum} by zero`)
            }
            break;
        
        case "%":
            if (secondNum !== 0){
                console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`)
            } else {
                console.log(`Cannot divide ${firstNum} by zero`)
            }
            break;
    }
}

operations(["10",
"0",
"%"])