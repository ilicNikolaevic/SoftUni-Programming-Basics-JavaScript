function decoration(input) {
    let index = 0;

    let clientsCount = Number(input[index]);
    index++;

    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7;
    let totalProfit = 0;

    for (let i = 1; i <= clientsCount; i++) {
        let item = input[index];
        index++;

        let itemsCount = 0;
        let clientTotalPrice = 0;

        while (item !== "Finish") {
            itemsCount++;

            switch (item) {
                case "basket":
                    clientTotalPrice += basketPrice;
                    break;
                case "wreath":
                    clientTotalPrice += wreathPrice;
                    break;
                case "chocolate bunny":
                    clientTotalPrice += chocolateBunnyPrice;
                    break;
            }

            item = input[index];
            index++;

        }
        if (itemsCount % 2 === 0) {
            clientTotalPrice *= 0.8;
        }

        totalProfit += clientTotalPrice;

        console.log(`You purchased ${itemsCount} items for ${clientTotalPrice.toFixed(2)} leva.`);
    }

    let avgBill = totalProfit / clientsCount;

    console.log(`Average bill per client is: ${avgBill.toFixed(2)} leva.`);
}

decoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

