function oddEven(input){
    let index = 0;
    let numsCount = Number(input[index]);
    index++;
    let oddSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let evenSum = 0;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;

    for(let i = 1; i <= numsCount; i++){
        let curNum = Number(input[index]);
        index++;
        if(i % 2 === 0){
            evenSum+=curNum;
            if (curNum > evenMax){
                evenMax = curNum;
            }

            if(curNum < evenMin){
                evenMin = curNum;
            }
        } else {
            oddSum+=curNum;
            if (curNum > oddMax){
                oddMax = curNum;
            }

            if(curNum < oddMin){
                oddMin = curNum;
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    
    if(oddMin !== Number.MAX_SAFE_INTEGER){
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    } else {
        console.log("OddMin=No,");
    }
    
    if(oddMax !== Number.MIN_SAFE_INTEGER){
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log("OddMax=No,");
    }
    
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    
    if(evenMin !== Number.MAX_SAFE_INTEGER){
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    } else {
        console.log("EvenMin=No,");
    }
    
    if(evenMax !== Number.MIN_SAFE_INTEGER){
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log("EvenMax=No");
    }
}

oddEven(["1", "1"]);


