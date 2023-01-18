function pets(input){
    let days = Number(input[0]);
    let allFood = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let foodEaten = (dogFoodPerDay+catFoodPerDay+(turtleFoodPerDay/1000))*days;

    if (allFood >= foodEaten){
        console.log(`${Math.floor(allFood-foodEaten)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodEaten-allFood)} more kilos of food are needed.`);
    }

}

pets(["5", "10", "2.1", "0.8", "321"]);

