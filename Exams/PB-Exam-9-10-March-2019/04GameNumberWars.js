function gameNumberWars(input) {
    let index = 0;

    let nameFirstPlayer = input[index];
    index++;

    let nameSecondPlayer = input[index];
    index++;

    let command = input[index];
    index++;

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let firstPlayerWin = false;
    let secondPlayerWin = false;

    while (command !== "End of game") {
        let firstCard = Number(command);

        let secondCard = Number(input[index]);
        index++;

        if (firstCard > secondCard) {
            firstPlayerPoints += firstCard - secondCard;
        } else if (firstCard < secondCard) {
            secondPlayerPoints += secondCard - firstCard;
        } else {
            console.log("Number wars!");
            firstCard = Number(input[index]);
            index++;
            secondCard = Number(input[index]);
            index++;

            if (firstCard > secondCard) {
                firstPlayerWin = true;
                break;
            } else {
                secondPlayerWin = true;
                break;
            }
        }

        command = input[index];
        index++;

    }

    if (firstPlayerWin) {
        console.log(`${nameFirstPlayer} is winner with ${firstPlayerPoints} points`);
    } else if (secondPlayerWin) {
        console.log(`${nameSecondPlayer} is winner with ${secondPlayerPoints} points`);
    } else {
        console.log(`${nameFirstPlayer} has ${firstPlayerPoints} points`);
        console.log(`${nameSecondPlayer} has ${secondPlayerPoints} points`);
    }


}

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])






