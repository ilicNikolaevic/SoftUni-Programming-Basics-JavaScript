function skeleton(input){
    let controlMins = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let allMeters = Number(input[2]);
    let secondsFor100M = Number(input[3]);

    let controllInSeconds = (controlMins*60)+controlSeconds;
    let delay = (allMeters/120)*2.5;
    let finalTime = ((allMeters/100)*secondsFor100M) - delay;

    if (finalTime <= controllInSeconds){
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${finalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(finalTime-controllInSeconds).toFixed(3)} second slower.`);
    }
}

skeleton(["1",
"20",
"1546",
"12"])

