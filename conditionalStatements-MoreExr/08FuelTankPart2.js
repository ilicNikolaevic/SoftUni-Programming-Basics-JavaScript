function fuelTank2(input) {
    let typeFuel = input[0];
    let quantityFuel = Number(input[1]);
    let card = input[2];
    let cardYes = false;
    let pricePerLiter = 0;
    let finalPrice = 0;

    if (card === "Yes") {
        cardYes = true;
    }

    if (typeFuel === "Gasoline") {
        pricePerLiter = 2.22;
        if (cardYes) {
            pricePerLiter = 2.04;
        }
        finalPrice = pricePerLiter * quantityFuel;
    } else if (typeFuel === "Diesel") {
        pricePerLiter = 2.33;
        if (cardYes) {
            pricePerLiter = 2.21;
        }
        finalPrice = pricePerLiter * quantityFuel;
    } else {
        pricePerLiter = 0.93;
        if (cardYes) {
            pricePerLiter = 0.85;
        }
        finalPrice = pricePerLiter * quantityFuel;
    }

    if (quantityFuel > 25) {
        finalPrice = finalPrice - finalPrice * 0.1;
    } else if (quantityFuel >= 20 && quantityFuel <= 25) {
        finalPrice = finalPrice - finalPrice * 0.08;
    }
    
    console.log(`${finalPrice.toFixed(2)} lv.`)
}

fuelTank2(["Gasoline", "25", "No"]);