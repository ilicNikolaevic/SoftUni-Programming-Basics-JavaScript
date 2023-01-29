function oscars(input){
    let index = 0;
    let nameActer = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let countEvaluative = Number(input[index]);
    index++;
    let nominated = false;
    let neededPoints = 1250.5;

    for (i = 1; i <= countEvaluative; i++){
        let nameEvaluative = input[index];
        index++;
        let pointsGiven = Number(input[index]);
        index++;

        points+= (nameEvaluative.length * pointsGiven)/2;

        if (points >= neededPoints){
            nominated = true;
            break;
        }
    }

    if(nominated){
        console.log(`Congratulations, ${nameActer} got a nominee for leading role with ${points.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${nameActer} you need ${(neededPoints-points).toFixed(1)} more!`);
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

