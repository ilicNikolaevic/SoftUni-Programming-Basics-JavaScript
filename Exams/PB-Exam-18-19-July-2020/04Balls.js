function balls(input) {
    let index = 0;

    let ballsCount = Number(input[index]);
    index++;

    let totalPoints = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;


    for(let i = 1; i<=ballsCount; i++){
        let curBall = input[index];
        index++;

        switch(curBall){
            case "red": 
                redCount++;
                totalPoints+=5;
                break;
            case "orange": 
                orangeCount++;
                totalPoints+=10;
                break;
            case "yellow":
                yellowCount++;
                totalPoints+=15; 
                break;
            case "white": 
                whiteCount++;
                totalPoints+=20;
                break;
            case "black": 
                blackCount++;
                totalPoints = Math.floor(totalPoints/2);
                break;
            default: 
                otherCount++;
                break;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
