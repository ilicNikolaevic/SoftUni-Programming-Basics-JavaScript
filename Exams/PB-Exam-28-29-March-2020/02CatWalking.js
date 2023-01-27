function catWalking(input){
    let minsWalk = Number(input[0]);
    let countWalks = Number(input[1]);
    let caloriesIn = Number(input[2]);
    let caloriesBurn = (minsWalk*5)*countWalks;

    if(caloriesIn/2 <= caloriesBurn){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurn}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurn}.`)
    }

}

catWalking(["15",
"2",
"500"])

