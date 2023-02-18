function everest(input){
    let goalMetters = 8848;

    let startingMetters = 5364;

    let daysCounter = 1;

    let index = 0;

    let command = input[index];
    index++;

    let isFailed = false;
    let goalReached = false;

    while(command !== 'END') {

        if(command === 'Yes'){
            daysCounter++;
        }

        if(daysCounter === 6){
            isFailed = true;
            break;
        }

        let mettersCompleted = Number(input[index]);
        index++;

        startingMetters += mettersCompleted;


        if(startingMetters >= goalMetters){
            goalReached = true;
            break;
        }

        command = input[index];
        index++;
    }

    if(goalReached){
        console.log(`Goal reached for ${daysCounter} days!`);
    } 

    if(isFailed || !goalReached){
        console.log('Failed!');
        console.log(`${startingMetters}`);
    }
}

everest(["Yes",
"700",
"END"])



