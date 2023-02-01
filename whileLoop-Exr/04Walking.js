function walking(input) {
    let goal = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;
    let goalReached = false;

    while (command !== "Going home") {
        let currentSteps = Number(command);
        totalSteps += currentSteps;

        if (totalSteps >= goal) {
            goalReached = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (!goalReached) {
        command = input[index];
        index++;
        let currentSteps = Number(command);
        totalSteps += currentSteps;
    }

    if (totalSteps >= goal) {
        goalReached = true;
    }


    if (!goalReached) {
        console.log(`${goal - totalSteps} more steps to reach goal.`)
    } else {
        console.log("Goal reached! Good job!")
        console.log(`${totalSteps - goal} steps over the goal!`)
    }
}



walking(["1000",
    "1500",
    "2000",
    "6500"])








