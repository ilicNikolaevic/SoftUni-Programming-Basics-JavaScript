function tournament(input){
    let index = 0;
    let team = input[index];
    index++;
    let matches = Number(input[index]);
    index++;

    let points = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;

    if (matches === 0){
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }

    for(let i = 1; i <= matches; i++){
        let curMatch = input[index];
        index++;

        switch(curMatch){
            case "W": 
                points += 3; 
                wins++;
                break;
            case "D": 
                points += 1;
                draws++; 
                break;
            case "L":
                losses++; 
                break;
        }
    }

    console.log(`${team} has won ${points} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${wins}`);
    console.log(`## D: ${draws}`);
    console.log(`## L: ${losses}`);
    console.log(`Win rate: ${((wins / matches)*100).toFixed(2)}%`)
}

tournament(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])


