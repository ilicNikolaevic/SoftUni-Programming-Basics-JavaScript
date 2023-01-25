function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decorPrice = budget * 0.1;
    
    if (statistsCount > 150){
        clothesPrice = clothesPrice - clothesPrice*0.1;
    }

    let totalPrice = (statistsCount*clothesPrice)+decorPrice;

    if (totalPrice <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget-totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice-budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"])


