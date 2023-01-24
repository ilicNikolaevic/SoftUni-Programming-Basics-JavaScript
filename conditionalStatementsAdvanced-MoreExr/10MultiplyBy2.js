function multiply(input){
    let index = 0;
    let num = Number(input[index]);
    while(num >= 0){
        num = Number(input[index]);
        if(num < 0){
            break;
        }
        console.log(`Result: ${(num*2).toFixed(2)}`)
        index++;
    }
    console.log("Negative number!");
}

multiply(["-123"]);

