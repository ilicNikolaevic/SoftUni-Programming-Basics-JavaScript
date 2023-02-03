function fitness(input) {
    let index = 0;

    let visitors = Number(input[index]);
    index++;
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;
    let workoutCount = 0;
    let buyProteinCount = 0;

    for (i = 1; i <= visitors; i++) {
        let typeActivity = input[index];
        index++;

        switch (typeActivity) {
            case "Back":
                backCount++;
                workoutCount++;
                break;
            case "Chest":
                chestCount++;
                workoutCount++;
                break;
            case "Legs":
                legsCount++;
                workoutCount++;
                break;
            case "Abs":
                absCount++;
                workoutCount++;
                break;
            case "Protein shake":
                proteinShakeCount++;
                buyProteinCount++;
                break;
            case "Protein bar":
                proteinBarCount++;
                buyProteinCount++;
                break;
        }
    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${((workoutCount / visitors) * 100).toFixed(2)}% - work out`);
    console.log(`${((buyProteinCount / visitors) * 100).toFixed(2)}% - protein`);
}

fitness(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])


