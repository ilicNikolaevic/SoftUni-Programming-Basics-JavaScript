function swimming(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let distanceForSwim = distance * timePerMeter;
    let delay = Math.floor(distance / 15);
    delay = delay * 12.5

    distanceForSwim += delay;

    if (distanceForSwim < record) {
        console.log(`Yes, he succeeded! The new world record is ${(distanceForSwim).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(distanceForSwim - record).toFixed(2)} seconds slower.`);
    }
}

swimming(["10464",

"1500",

"20"])