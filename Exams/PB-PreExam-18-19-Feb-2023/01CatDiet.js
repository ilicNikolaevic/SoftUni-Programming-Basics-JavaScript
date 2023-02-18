function catDiet(input) {
    let percentFats = Number(input[0]);

    let percentProteins = Number(input[1]);

    let percentCarbs = Number(input[2]);

    let totalCalories = Number(input[3]);

    let percentWater = Number(input[4]);


    let gramsFromFat = ((percentFats / 100) * totalCalories) / 9;

    let gramsFromProteins = ((percentProteins / 100) * totalCalories) / 4;

    let gramsFromCarbs = ((percentCarbs / 100) * totalCalories) / 4;

    let totalGrams = gramsFromFat + gramsFromProteins + gramsFromCarbs;

    let caloriesPerGram = totalCalories / totalGrams;

    let finalCalories = caloriesPerGram * ((100 - percentWater) / 100);

    console.log(finalCalories.toFixed(4));

}


catDiet(["60",
    "25",
    "15",
    "2500",
    "60"])
