function fishing(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);
    let priceForRent = 0;

    switch(season){
        case "Spring": priceForRent = 3000; break;
        case "Summer":
        case "Autumn": priceForRent = 4200; break;
        case "Winter": priceForRent = 2600; break;
    }
    
    if(fishersCount <= 6){
        priceForRent = priceForRent - priceForRent*0.1;
    } else if (fishersCount >= 7 && fishersCount <= 11){
        priceForRent = priceForRent - priceForRent*0.15;
    } else {
        priceForRent = priceForRent - priceForRent*0.25;
    }

    if(season !== "Autumn" && fishersCount % 2 === 0){
        priceForRent = priceForRent - priceForRent*0.05;
    }

    if (priceForRent<=budget){
        console.log(`Yes! You have ${(budget-priceForRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(priceForRent-budget).toFixed(2)} leva.`);
    }
}

fishing(["2000",
"Winter",
"13"])
