function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let totalPrice = 0;
    let counter = 0;
    let budgetIsOver = false;

    let productName = input[index];
    index++;

    while (productName !== "Stop") {
        counter++;
        let productPrice = Number(input[index]);
        index++;
        if (counter % 3 === 0) {
            productPrice /= 2;
        }

        totalPrice += productPrice;

        if (totalPrice > budget) {
            budgetIsOver = true;
            break;
        }

        productName = input[index];
        index++;
    }

    if (!budgetIsOver) {
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    } else {
        console.log("You don't have enough money!");
        console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
    }
}

touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"])
