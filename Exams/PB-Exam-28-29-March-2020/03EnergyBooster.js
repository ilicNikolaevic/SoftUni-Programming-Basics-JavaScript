function energyBooster(input){
    let fruit = input[0];
    let sizeSet = input[1];
    let countSets = Number(input[2]);
    let priceForOneSet = 0;
    let finalPrice = 0;

    switch(fruit){
        case "Watermelon":
            switch(sizeSet){
                case "small": priceForOneSet = 2 * 56; break;
                case "big": priceForOneSet = 5 * 28.70; break;
            }
            
            break;

        case "Mango":
            switch(sizeSet){
                case "small": priceForOneSet = 2 * 36.66; break;
                case "big": priceForOneSet = 5 * 19.60; break;
            }
            
            break;

        case "Pineapple":
            switch(sizeSet){
                case "small": priceForOneSet = 2 * 42.10; break;
                case "big": priceForOneSet = 5 * 24.80; break;
            }
            
            break;

        case "Raspberry":
            switch(sizeSet){
                case "small": priceForOneSet = 2 * 20; break;
                case "big": priceForOneSet = 5 * 15.20; break;
            }

            break;
        }

        finalPrice = countSets*priceForOneSet;

        if(finalPrice >= 400 && finalPrice <= 1000){
            finalPrice = finalPrice * 0.85;
        } else if (finalPrice > 1000){
            finalPrice = finalPrice*0.5;
        }

        console.log(`${finalPrice.toFixed(2)} lv.`)

}

energyBooster(["Mango",
"big",
"8"])


