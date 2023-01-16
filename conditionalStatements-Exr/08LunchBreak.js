function lunchBreak(input){
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let eatDuration = 1/8 * breakDuration;
    let relaxDuration = 1/4 * breakDuration;

    let restTime = breakDuration - eatDuration - relaxDuration;

    if (restTime >= episodeDuration){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(restTime-episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeDuration-restTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"])