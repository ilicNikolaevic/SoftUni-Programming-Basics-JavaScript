function sleepyCat(input) {
    let restDays = Number(input[0]);
    let workDays = 365 - restDays;

    let minutesForPlay = restDays * 127 + workDays * 63;
    let diffMins = Math.abs(30000 - minutesForPlay);
    if (minutesForPlay <= 30000) {
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(diffMins / 60)} hours and ${diffMins % 60} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${Math.floor(diffMins / 60)} hours and ${diffMins % 60} minutes more for play`);
    }
}

sleepyCat(["113"]);