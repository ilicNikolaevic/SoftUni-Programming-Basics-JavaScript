function easter(input){
    let countEasterBread = Number(input[0]);
    let countPeelEggs = Number(input[1]);
    let kilosCookies = Number(input[2]);
    let priceEasterBread = 3.20;
    let pricePeelEggs = 4.35;
    let priceForKgCookies = 5.4;
    let paintForEgg = 0.15;
    let eggsCount = countPeelEggs*12;
    let pricePaint = eggsCount*paintForEgg;

    let totalPrice = (countPeelEggs*pricePeelEggs)+(countEasterBread*priceEasterBread)+(kilosCookies*priceForKgCookies)+pricePaint;
    console.log(totalPrice.toFixed(2));
}

easter(["4",
"4",
"3"])
