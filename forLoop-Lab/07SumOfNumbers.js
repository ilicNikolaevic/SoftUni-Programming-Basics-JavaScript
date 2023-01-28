function sumOfNums(input){
    let num = input[0];
    let sum = 0;

    for(i = 0; i < num.length; i++){
        let currentNum = Number(num[i]);
        sum += currentNum;
    }
    console.log(`The sum of the digits is:${sum}`)
}

sumOfNums(["564891"]);