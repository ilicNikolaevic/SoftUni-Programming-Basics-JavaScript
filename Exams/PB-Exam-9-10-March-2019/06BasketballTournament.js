function basketballTournaments(input){
    let index = 0;
    let tournamentName = input[index];
    index++;

    let wins = 0;
    let losses = 0;
    let matches = 0;

    while(tournamentName !== "End of tournaments"){
        let countMatches = Number(input[index]);
        index++;

        matches += countMatches;

        for(let i = 1; i <= countMatches; i++){
            let firstPoints = Number(input[index]);
            index++;
            
            let  secondPoints = Number(input[index]);
            index++;

            if(firstPoints > secondPoints){
                wins++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${firstPoints-secondPoints} points.`);
            } else {
                losses++;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${secondPoints-firstPoints} points.`)
            }
        }

        tournamentName = input[index];
        index++;
    }

    console.log(`${((wins/matches)*100).toFixed(2)}% matches win`);
    console.log(`${((losses/matches)*100).toFixed(2)}% matches lost`)

}

basketballTournaments(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])
