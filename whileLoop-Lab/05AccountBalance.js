function accountBalance(input){
    let sum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "NoMoreMoney"){
        let increase = Number(command);
        if(increase < 0){
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${increase.toFixed(2)}`);
        }

        sum+= increase;

        command = input[index];
        index++;

    }

    console.log(`Total: ${sum.toFixed(2)}`)
}

accountBalance(["120",
"45.55",
"-150"])

