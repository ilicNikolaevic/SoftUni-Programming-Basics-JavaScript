function tennis(input) {
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let wins = 0;
    let winPoints = 0;

    for (i = 1; i <= countTournaments; i++) {
        let phase = input[index];
        index++;

        switch (phase) {
            case "W":
                winPoints += 2000;
                wins++;
                break;
            case "F":
                winPoints += 1200;
                break;
            case "SF":
                winPoints+=720;
                break;
        }
    }

    console.log(`Final points: ${startingPoints+winPoints}`);
    console.log(`Average points: ${Math.floor(winPoints/countTournaments)}`);
    console.log(`${(wins/countTournaments*100).toFixed(2)}%`)
}

tennis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


