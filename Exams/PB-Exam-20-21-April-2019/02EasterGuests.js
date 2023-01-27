function easterGuests(input){
    let countGuesses = Number(input[0]);
    let budget = Number(input[1]);
    let priceEasterBread = 4;
    let priceForEgg = 0.45;
    let countEasterBread = Math.ceil(countGuesses/3);
    let countEggs = countGuesses*2;
    let totalPrice = (priceEasterBread*countEasterBread)+(priceForEgg*countEggs);

    if (budget >= totalPrice){
        console.log(`Lyubo bought ${countEasterBread} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${(budget-totalPrice).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalPrice-budget).toFixed(2)} lv. more.`);
    }
} 

easterGuests(["9",
"12"])
