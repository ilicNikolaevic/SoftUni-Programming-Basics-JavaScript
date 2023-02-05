function care(input){
    let index = 0;

    let quantityFoodKg = Number(input[index]);
    index++;

    let quantityFoodGr = quantityFoodKg*1000;

    let command = input[index];
    index++;

    while(command !== "Adopted"){
        let quantityEatenFood = Number(command);

        quantityFoodGr -= quantityEatenFood;

        command = input[index];
        index++;
    }

    if (quantityFoodGr >= 0){
        console.log(`Food is enough! Leftovers: ${quantityFoodGr} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(quantityFoodGr)} grams more.`);
    }
}

care(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


