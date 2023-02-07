function nameGame(input){
    let index = 0;
    let playerName = input[index];
    index++;
    let winnerName = "";
    let winnerPoints = 0;

    while(playerName !== "Stop"){
        let points = 0;
        for(let i = 0; i < playerName.length; i++){
            let currentDiggit = playerName[i];

            let numFromInput = Number(input[index]);
            index++;

            if (currentDiggit.charCodeAt() === numFromInput) {
                points+=10;
            } else {
                points+=2;
            }
        }

        if(points >= winnerPoints){
            winnerPoints = points;
            winnerName = playerName;
        }

        playerName = input[index];
        index++;
    }

    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"])

