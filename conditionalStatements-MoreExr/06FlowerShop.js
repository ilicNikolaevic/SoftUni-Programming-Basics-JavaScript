function flowerShop(input) {
    let countMagnolias = Number(input[0]);
    let countHyacinths = Number(input[1]);
    let countRoses = Number(input[2]);
    let countCactuses = Number(input[3]);
    let priceGift = Number(input[4]);

    let profit = (countMagnolias * 3.25) + (countHyacinths * 4) + (countRoses * 3.50) + (countCactuses * 8);
    let tax = profit * 0.05;

    profit -= tax;

    if (profit >= priceGift) {
        console.log(`She is left with ${Math.floor(profit - priceGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(priceGift - profit)} leva.`);
    }
}

flowerShop(["15", "7", "5", "10", "100"]);

