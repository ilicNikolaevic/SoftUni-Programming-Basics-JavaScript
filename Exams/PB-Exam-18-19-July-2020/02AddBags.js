function addBags(input){
    let priceBagAbove20kg = Number(input[0]);
    let bagKilos = Number(input[1]);
    let daysBeforeTrip = Number(input[2]);
    let countBags = Number(input[3]);
    let priceBag = 0;

    if (bagKilos < 10){
        priceBag = priceBagAbove20kg*0.2;
    } else if (bagKilos >= 10 && bagKilos <= 20){
        priceBag = priceBagAbove20kg*0.5;
    } else {
        priceBag = priceBagAbove20kg;
    }

    if (daysBeforeTrip > 30){
        priceBag = priceBag + priceBag*0.1;
    } else if (daysBeforeTrip <= 30 && daysBeforeTrip >= 7){
        priceBag = priceBag + priceBag*0.15;
    } else {
        priceBag = priceBag + priceBag*0.4;
    }

    console.log(`The total price of bags is: ${(priceBag*countBags).toFixed(2)} lv. `);

}

addBags(["63.80",
"23",
"3",
"1"])	


