function movieDay(input){
    let timeForPics = Number(input[0]);
    let scenesCount = Number(input[1]);
    let timePerScene = Number(input[2]);
    let prepTime = timeForPics*0.15;
    let totalTimeForMovie = (scenesCount*timePerScene)+prepTime;

    if (timeForPics >= totalTimeForMovie){
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForPics-totalTimeForMovie)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTimeForMovie-timeForPics)} minutes.`);
    }
}

movieDay(["60",
"15",
"3"])
