function bakery(input){
    let priceFlourKg = Number(input[0]);
    let kilosFlour = Number(input[1]);
    let kilosSugar = Number(input[2]);
    let countPeelEggs = Number(input[3]);
    let packagesYeast = Number(input[4]);
    let priceSugarKg = priceFlourKg*0.75;
    let pricePeelEggs = priceFlourKg+priceFlourKg*0.1;
    let pricePackageYeast = priceSugarKg*0.2;
    let totalPrice = (priceFlourKg*kilosFlour)+(priceSugarKg*kilosSugar)+(countPeelEggs*pricePeelEggs)+(packagesYeast*pricePackageYeast);

    console.log(totalPrice.toFixed(2));
}

bakery(["63.44",
"3.57",
"6.35",
"8",
"2"])

