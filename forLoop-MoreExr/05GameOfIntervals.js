function gameIntervals(input){
    let index = 0;
    let countTurns = Number(input[index]);
    index++;

    let countUnder10 = 0;
    let countUnder20 = 0;
    let countUnder30 = 0;
    let countUnder40 = 0;
    let countUnder50 = 0;
    let countInvalid = 0;
    let totalPoints = 0;

    for (i = 1; i <= countTurns; i++){
        let curTurn = Number(input[index]);
        index++;

        if (curTurn < 0 || curTurn > 50) {
            countInvalid++;
            totalPoints/=2;
        } else if (curTurn <= 9) {
            countUnder10++;
            totalPoints+= 0.2*curTurn;
        } else if (curTurn <= 19) {
            countUnder20++;
            totalPoints+= 0.3*curTurn;
        } else if (curTurn <= 29) {
            countUnder30++;
            totalPoints+= 0.4*curTurn;
        } else if (curTurn <= 39) {
            countUnder40++;
            totalPoints+=50;
        } else {
            countUnder50++;
            totalPoints+=100;
        }
    }

    console.log(`${totalPoints.toFixed(2)}`);
    console.log(`From 0 to 9: ${((countUnder10/countTurns)*100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((countUnder20/countTurns)*100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((countUnder30/countTurns)*100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((countUnder40/countTurns)*100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((countUnder50/countTurns)*100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((countInvalid/countTurns)*100).toFixed(2)}%`);
    

}

gameIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])


