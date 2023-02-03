function darts(input){
    let index = 0;
    let goalPoints = 301;

    let name = input[index];
    index++;

    let multiplicator = input[index];
    index++;

    let currentPoints = Number(input[index]);
    index++;

    let totalPoints = 0;
    let unsuccess = 0;
    let success = 0;
    let isWin = false;

    while(multiplicator !== "Retire"){
        switch(multiplicator){
            case "Single":
            break;
            case "Double":
            currentPoints*=2;    
            break;
            case "Triple":
            currentPoints*=3;
            break;
        }

        if (currentPoints+totalPoints > goalPoints){
            unsuccess++;
            multiplicator = input[index];
            index++;

            currentPoints = Number(input[index]);
            index++;
            continue;
        } else {
            success++;
            totalPoints+=currentPoints;
        }

        if(totalPoints === goalPoints){
            isWin = true;
            break;
        }

        multiplicator = input[index];
        index++;

        currentPoints = Number(input[index]);
        index++;
    }

    if(isWin){
        console.log(`${name} won the leg with ${success} shots.`);
    } else {
        console.log(`${name} retired after ${unsuccess} unsuccessful shots.`)
    }
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])


