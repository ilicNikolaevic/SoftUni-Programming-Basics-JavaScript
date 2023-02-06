function sumTwoNums(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let counter = 0;
    let isFound = false;

    for(let i = startNum; i <= endNum; i++){
        for(let j = startNum; j <= endNum; j++){
            counter++;

            if (i + j === magicNum){
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`)
                break;
            }

        }
        if(isFound){
            break;
        }
    }

    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}

sumTwoNums(["23",

"24",

"20"])