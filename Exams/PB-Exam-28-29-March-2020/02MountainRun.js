function mountainRun(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMetters = Number(input[1]);
    let timePerMetterInSeconds = Number(input[2]);
    let delayInSeconds = Math.floor(distanceInMetters/50)*30;
    let finalTimeInSeconds = (timePerMetterInSeconds*distanceInMetters)+delayInSeconds;

    if (finalTimeInSeconds < recordInSeconds){
        console.log(`Yes! The new record is ${finalTimeInSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(finalTimeInSeconds-recordInSeconds).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377",
"389",
"3"])


