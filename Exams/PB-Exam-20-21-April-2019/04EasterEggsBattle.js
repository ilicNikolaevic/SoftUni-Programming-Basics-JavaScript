function eggBattle(input) {
    let index = 0;

    let firstPlayerEggs = Number(input[index]);
    index++;

    let secondPlayerEggs = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let firstPlayerWin = false;
    let secondPlayerWin = false;

    while (command !== "End") {
        switch (command) {
            case "one": secondPlayerEggs--; break;
            case "two": firstPlayerEggs--; break;
        }

        if (firstPlayerEggs === 0) {
            secondPlayerWin = true;
            break;
        }

        if (secondPlayerEggs === 0) {
            firstPlayerWin = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (firstPlayerWin) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
    } else if (secondPlayerWin) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
    } else {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}

eggBattle(["6", "3", "one", "two", "two", "one", "one"]);

