function traveling(input){
    let index = 0;

    let destination = input[index];
    index++;

    let neededBudget = Number(input[index]);
    index++;

    while(destination !== "End"){
        let curSum = Number(input[index]);
        index++;

        let sumTotal = 0;

        while(neededBudget > 0){
            neededBudget-=curSum;
            if(neededBudget <= 0){
                break;
            }
            curSum = Number(input[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);

        destination = input[index];
        index++;

        neededBudget = Number(input[index]);
        index++;

    }
}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])