function equalPairs(input){
    let index = 0;
    let pairsCount = Number(input[index]);
    index++;
    let sum = 0;
    let maxDiff = 0;
    for(let i = 1; i <= pairsCount; i++){
        let firstNum = Number(input[index]);
        index++;
        let secondNum = Number(input[index]);
        index++;
        if(i === 1){
            sum = firstNum+secondNum;
        }

        if(firstNum+secondNum > sum){
            maxDiff = (firstNum+secondNum)-sum;
            sum = firstNum+secondNum;
        } else if (firstNum+secondNum < sum){
            maxDiff = sum-(firstNum+secondNum);
            sum = firstNum+secondNum;
        }

    }

    if(maxDiff === 0){
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
  
}

equalPairs(["2", "-1", "2", "0", "-1"]);









