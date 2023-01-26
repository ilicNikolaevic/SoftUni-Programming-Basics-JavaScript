function movieDestination(input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let priceForDay = 0;
    let finalPrice = 0;

    switch(destination){
        case "Dubai":
            switch(season){
                case "Winter": priceForDay = 45000; 
                    break;
                case "Summer": priceForDay = 40000;
                    break;
            }
            break;
        case "Sofia":
            switch(season){
                case "Winter": priceForDay = 17000; 
                    break;
                case "Summer": priceForDay = 12500;
                    break;
            }
            break;
        case "London":
            switch(season){
                case "Winter": priceForDay = 24000; 
                    break;
                case "Summer": priceForDay = 20250;
                    break;
            }
            break;
    }

    finalPrice = priceForDay*days;

    if (destination === "Dubai"){
        finalPrice = finalPrice*0.7;
    }

    if (destination === "Sofia"){
        finalPrice = finalPrice + finalPrice*0.25;
    }

    if (budget >= finalPrice){
        console.log(`The budget for the movie is enough! We have ${(budget-finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(finalPrice-budget).toFixed(2)} leva more!`);
    }
}

movieDestination(["200000",
"London",
"Summer",
"7"])

