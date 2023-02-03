function tennis(input){
    let index = 0;

    let tournamentsCount = Number(input[index]);
    index++;

    let startingPoints = Number(input[index]);
    index++;

    let pointsWin = 0;
    let wins = 0;

    for(i = 1; i <= tournamentsCount; i++){
        let phase = input[index];
        index++;

        switch(phase){
            case "W":
                wins++; 
                pointsWin += 2000; 
                break;
            case "F": pointsWin += 1200; break;
            case "SF": pointsWin += 720; break;
        }
    }

    console.log(`Final points: ${startingPoints+pointsWin}`);
    console.log(`Average points: ${Math.floor(pointsWin/tournamentsCount)}`);
    console.log(`${((wins/tournamentsCount)*100).toFixed(2)}%`);
}

tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])

