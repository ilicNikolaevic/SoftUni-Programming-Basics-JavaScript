function invalidNumber(input){
    let num = Number(input[0]);
    let isInvalid = true;

    if (num === 0 || num >= 100 && num <= 200){
        isInvalid = false;
    }

    if(isInvalid){
        console.log("invalid");
    }
}

invalidNumber(["0"])