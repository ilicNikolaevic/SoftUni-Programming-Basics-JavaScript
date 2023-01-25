function poolDay(input){
    let peopleCount = Number(input[0]);
    let priceForInput = Number(input[1]);
    let priceForSunbed = Number(input[2]);
    let priceForUmbrella = Number(input[3]);
    let umbrellasCount = Math.ceil(peopleCount / 2);
    let sunbedCount = Math.ceil(peopleCount * 0.75);

    let finalPrice = (peopleCount*priceForInput)+(umbrellasCount*priceForUmbrella)+(sunbedCount*priceForSunbed);

    console.log(`${finalPrice.toFixed(2)} lv.`)
}

poolDay(["21", "5.50", "4.40", "6.20"]);