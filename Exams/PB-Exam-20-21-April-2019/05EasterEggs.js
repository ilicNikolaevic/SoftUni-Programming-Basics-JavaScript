function easterEggs(input){
    let index = 0;
    
    let eggsCount = Number(input[index]);
    index++;

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    let countMax = 0;
    let colorMax = "";

    for (let i = 1; i <= eggsCount; i++){
        let curColor = input[index];
        index++;

        switch(curColor){
            case "red": 
                redCount++;
                break;
            case "orange": 
                orangeCount++;
                break;
            case "blue": 
                blueCount++;
                break;
            case "green": 
                greenCount++;
                break;
        }
    }

    if (redCount > orangeCount && redCount > blueCount && redCount > greenCount){
        countMax = redCount;
        colorMax = "red";
    } else if (orangeCount > redCount && orangeCount > blueCount && orangeCount > greenCount) {
        countMax = orangeCount;
        colorMax = "orange";
    } else if (blueCount > redCount && blueCount > orangeCount && blueCount > greenCount) {
        countMax = blueCount;
        colorMax = "blue";
    } else if (greenCount > redCount && greenCount > blueCount && greenCount > orangeCount) {
        countMax = greenCount;
        colorMax = "green";
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${countMax} -> ${colorMax}`)
}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) 

