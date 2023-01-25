function familyTrip(input){
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let priceForNight = Number(input[2]);
    let percentCosts = Number(input[3]);

    if(nightsCount > 7){
        priceForNight = priceForNight*0.95;
    }
    
    let finalPrice = (priceForNight*nightsCount) + (budget*(percentCosts/100));

    if (budget >= finalPrice){
        console.log(`Ivanovi will be left with ${(budget-finalPrice).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(finalPrice-budget).toFixed(2)} leva needed.`);
    }
}

familyTrip(["500",
"7",
"66",
"15"])