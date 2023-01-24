function truckDriver(input) {
    let season = input[0];
    let kilometers = Number(input[1]);
    let priceForKm = 0;
    let finalProfit = 0;

    switch (season) {
        case "Spring":
        case "Autumn":

            if (kilometers <= 5000) {
                priceForKm = 0.75;
            } else if (kilometers <= 10000) {
                priceForKm = 0.95;
            } else {
                priceForKm = 1.45;
            }
            break;

        case "Summer":

            if (kilometers <= 5000) {
                priceForKm = 0.9;
            } else if (kilometers <= 10000) {
                priceForKm = 1.1;
            } else {
                priceForKm = 1.45;
            }
            break;

        case "Winter":
            if (kilometers <= 5000) {
                priceForKm = 1.05;
            } else if (kilometers <= 10000) {
                priceForKm = 1.25;
            } else {
                priceForKm = 1.45;
            }

            break;

    }

    finalProfit = ((kilometers * priceForKm) * 0.9) * 4;

    console.log(`${finalProfit.toFixed(2)}`);
}

truckDriver(["Spring", "16942"]);

