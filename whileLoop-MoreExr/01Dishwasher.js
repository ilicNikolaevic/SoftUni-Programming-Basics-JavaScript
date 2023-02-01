function dishwasher(input){
    let index = 0;
    let countBottles = Number(input[index]);
    index++;

    let mlDetergent = countBottles*750;
    let detergentIsOver = false;

    let counter = 0;
    let countDishes = 0;
    let countPots = 0;

    let command = input[index];
    index++;

    while (command !== "End"){
        counter++;
        let usedDetergent = 0;

        let currentDishes = Number(command);
        if(counter%3 === 0){
            countPots+=currentDishes;
            usedDetergent = currentDishes*15;
        } else {
            countDishes+=currentDishes;
            usedDetergent = currentDishes*5;
        }

        mlDetergent -= usedDetergent;

        if(mlDetergent < 0){
            detergentIsOver = true;
            break;
        }

        command = input[index];
        index++;
    }

    if(detergentIsOver){
        console.log(`Not enough detergent, ${Math.abs(mlDetergent)} ml. more necessary!`)
    } else {
        console.log("Detergent was enough!");
        console.log(`${countDishes} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${mlDetergent} ml.`);
    }

}

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);





