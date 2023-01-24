function vacantion(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let place = "";
    let price = 0;

    if (budget <= 1000) {
        place = "Camp";

        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget <= 3000) {
        place = "Hut";

        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.8;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.6;
                break;
        }
    } else {
        place = "Hotel";
        price = budget * 0.9;

        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}

vacantion(["3460", "Summer"]);
