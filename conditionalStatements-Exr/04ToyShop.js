function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let quantityPuzzles = Number(input[1]);
    let quantityDolls = Number(input[2]);
    let quantityBears = Number(input[3]);
    let quantityMinions = Number(input[4]);
    let quantityTrucks = Number(input[5]);

    let pricePuzzles = 2.60;
    let priceDolls = 3;
    let priceBears = 4.10;
    let priceMinions = 8.20;
    let priceTrucks = 2;

    let allQuantity = quantityPuzzles + quantityDolls + quantityBears + quantityMinions + quantityTrucks;

    let price = (quantityPuzzles * pricePuzzles) + (quantityDolls * priceDolls) + (quantityBears * priceBears) + (quantityMinions * priceMinions) + (quantityTrucks * priceTrucks);

    price -= price * 0.1;

    if (allQuantity >= 50) {
        price -= price * 0.25;
    }
    if (price >= priceExcursion) {
        console.log(`Yes! ${(price - priceExcursion).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceExcursion - price).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);