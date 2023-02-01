function vacantion(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let typeAction = input[index];
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let daysSpend = 0;
    let daysTotal = 0;

    while (daysSpend !== 5) {
        if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${daysTotal} days.`);
            return;
        }
        switch (typeAction) {
            case "spend":
                daysSpend++;
                daysTotal++;
                if (availableMoney - currentMoney < 0) {
                    availableMoney = 0;
                } else {
                    availableMoney -= currentMoney;
                }
                break;

            case "save":
                daysTotal++;
                daysSpend = 0;
                availableMoney += currentMoney;
        }

        typeAction = input[index];
        index++;

        currentMoney = Number(input[index]);
        index++;
    }

    console.log("You can't save the money.");
    console.log(`${daysTotal}`);

}

vacantion(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])

