function easterShop(input) {
    let index = 0;

    let startingEggsCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let eggsOver = false;
    let soldedEggs = 0;

    while (command !== "Close") {
        let curEggs = Number(input[index]);
        index++;

        if (curEggs > startingEggsCount && command === "Buy") {
            eggsOver = true;
            break;
        }

        switch (command) {
            case "Buy":
                soldedEggs += curEggs;
                startingEggsCount -= curEggs;
                break;
            case "Fill":
                startingEggsCount += curEggs;
                break;
        }

        command = input[index];
        index++;
    }

    if (eggsOver) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${startingEggsCount}.`);
    } else {
        console.log("Store is closed!");
        console.log(`${soldedEggs} eggs sold.`);
    }
}

easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])

