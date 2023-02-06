function equalSumEvenOdd(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let output = "";

    for(let currentNum = startNum; currentNum <= endNum; currentNum++){
        let currentNumStr = currentNum.toString();
        let oddSum = 0;
        let evenSum = 0;

        for(let i = 0; i < currentNumStr.length; i++){
            let currentDigit = Number(currentNumStr[i]);

            let position = i+1;

            if(position % 2 === 0){
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if(evenSum === oddSum){
            output += `${currentNumStr} `
        }
    }

    console.log(output);
}

equalSumEvenOdd(["100115", "100120"])