function gozilla (input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decor = budget*0.1;
    let allClothesPrice = statists*clothesPrice;
    
    if(statists >= 150){
        let discount = allClothesPrice*0.1
        allClothesPrice = allClothesPrice-discount;
    }

    let priceForMovie = allClothesPrice + decor;


    if (priceForMovie <= budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-priceForMovie).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(priceForMovie-budget).toFixed(2)} leva more.`);
    }
}

gozilla(["20000",

"120",

"55.5"])