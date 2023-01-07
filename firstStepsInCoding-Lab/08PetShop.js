function petShop(input){
    let priceDogFood = 2.5;
    let priceCatFood = 4;
    let buyedDogFood = Number(input[0]);
    let buyedCatFood = Number(input[1]);

    let sum = priceDogFood*buyedDogFood + priceCatFood*buyedCatFood;

    console.log(`${sum} lv.`);
    
}

petShop(["5", "4"]);