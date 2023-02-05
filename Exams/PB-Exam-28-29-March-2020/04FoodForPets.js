function foodForPets(input){
    let index = 0;

    let days = Number(input[index]);
    index++;

    let quantityFood = Number(input[index]);
    index++;

    let totalEatenByDog = 0;
    let totalEatenByCat = 0;
    let quantityEatenCookies = 0;

    for (let i = 1; i <= days; i++){
        let eatenByDogForDay = Number(input[index]);
        index++;
        let eatenByCatForDay = Number(input[index]);
        index++;

        totalEatenByDog += eatenByDogForDay;
        totalEatenByCat += eatenByCatForDay;

        if (i % 3 === 0){
            let cookiesForDay = 0.1*(eatenByDogForDay+eatenByCatForDay);

            quantityEatenCookies+=cookiesForDay;
        }
    }

    let totalEatenFood = totalEatenByDog+totalEatenByCat;
    let percentTotalEatenFood = (totalEatenFood / quantityFood)*100;
    let percentEatenFoodByDog = (totalEatenByDog / totalEatenFood)*100;
    let percentEatenFoodByCat = (totalEatenByCat / totalEatenFood)*100; 

    console.log(`Total eaten biscuits: ${Math.round(quantityEatenCookies)}gr.`);
    console.log(`${percentTotalEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFoodByCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])



