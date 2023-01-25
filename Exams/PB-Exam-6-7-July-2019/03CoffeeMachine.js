function coffeMachine(input){
    let typeDrink = input[0];
    let quantitySugar = input[1];
    let quantityDrinks = Number(input[2]);
    let priceForOneDrink = 0;
    let priceTotal = 0;
    
    switch(typeDrink){
        case "Espresso":
            switch(quantitySugar){
                case "Without": priceForOneDrink = 0.9;
                    break;
                case "Normal": priceForOneDrink = 1;
                    break;
                case "Extra": priceForOneDrink = 1.2;
                    break;
            }
            break;
        
        case "Cappuccino":
            switch(quantitySugar){
                case "Without": priceForOneDrink = 1;
                    break;
                case "Normal": priceForOneDrink = 1.2;
                    break;
                case "Extra": priceForOneDrink = 1.6;
                    break;
            }
            break;
        
        case "Tea":
            switch(quantitySugar){
                case "Without": priceForOneDrink = 0.5;
                    break;
                case "Normal": priceForOneDrink = 0.6;
                    break;
                case "Extra": priceForOneDrink = 0.7;
                    break;
            }
            break;
    }

    if (quantitySugar === "Without"){
        priceForOneDrink = priceForOneDrink*0.65;
    }

    if (typeDrink === "Espresso" && quantityDrinks >= 5){
        priceForOneDrink = priceForOneDrink*0.75;
    }

    priceTotal = priceForOneDrink*quantityDrinks;

    if (priceTotal > 15){
        priceTotal = priceTotal*0.8;
    }

    console.log(`You bought ${quantityDrinks} cups of ${typeDrink} for ${(priceTotal).toFixed(2)} lv.`);
}

coffeMachine(["Tea",
"Extra",
"3"])


