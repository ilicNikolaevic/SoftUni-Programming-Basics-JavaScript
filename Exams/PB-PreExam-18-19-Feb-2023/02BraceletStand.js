function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);

    let dailyProfit = Number(input[1]);

    let totalExpenses = Number(input[2]);

    let giftPrice = Number(input[3]);

    let totalMoney = ((pocketMoneyPerDay * 5) + (dailyProfit * 5)) - totalExpenses;

    if (totalMoney >= giftPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalMoney).toFixed(2)} BGN.`);
    }
}

braceletStand(["15.20",
    "200.00",
    "7.30",
    "1500.12"])


