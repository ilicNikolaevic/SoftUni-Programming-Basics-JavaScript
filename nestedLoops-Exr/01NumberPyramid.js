function pyramid(input){
    let endNum = Number(input[0]);
    let counter = 0;
    let counterIsBigger = false;
    
    for(let i = 1; i <= endNum; i++){
        let output = "";
        for(let j = 1; j <= i; j++){
            counter++;

            output += `${counter} `;
            
            if(counter >= endNum){
                counterIsBigger = true;
                break;
            }

        }
        console.log(output);

        if(counterIsBigger){
            break;
        }

        
    }
    
}

pyramid(["12"])