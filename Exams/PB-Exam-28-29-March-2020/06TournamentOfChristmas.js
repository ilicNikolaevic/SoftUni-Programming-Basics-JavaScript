function tournamentChristmass(input) {
    let index = 0;

    let countDays = Number(input[index]);
    index++;


    let totalProfit = 0;

    let daysWin = 0;
    let daysLoss = 0;

    for (let i = 1; i <= countDays; i++) {

        let currentSport = input[index];
        index++;

        let lossesForDay = 0;
        let winsForDay = 0;
        let profitForDay = 0;


        while (currentSport !== "Finish") {

            let result = input[index];
            index++;


            switch (result) {
                case "win":
                    profitForDay += 20;
                    winsForDay++;
                    break;
                case "lose":
                    lossesForDay++;
                    break;
            }

            currentSport = input[index];
            index++;
        }

        if (winsForDay > lossesForDay) {
            profitForDay *= 1.1;
            daysWin++;
        } else {
            daysLoss++;
        }

        totalProfit += profitForDay;
    }

    if (daysWin > daysLoss) {
        totalProfit *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalProfit.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalProfit.toFixed(2)}`);
    }
}

tournamentChristmass(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

