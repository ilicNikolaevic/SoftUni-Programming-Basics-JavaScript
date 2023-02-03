function oscars(input){
    let index = 0;
    
    let acterName = input[index];
    index++;

    let currentPoints = Number(input[index]);
    index++;

    let evaluativeCount = Number(input[index]);
    index++;

    let goalPoints = 1250.5;
    let goalAchieve = false;

    for(let i = 1; i <= evaluativeCount; i++){
        let evaluativeName = input[index];
        index++;

        let curRating = Number(input[index]);
        index++;

        let pointsForActer = (evaluativeName.length)*curRating / 2;

        currentPoints+=pointsForActer;

        if(currentPoints>=goalPoints){
            goalAchieve = true;
            break;
        }
    }

    if(goalAchieve){
        console.log(`Congratulations, ${acterName} got a nominee for leading role with ${currentPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${acterName} you need ${(goalPoints-currentPoints).toFixed(1)} more!`)
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

