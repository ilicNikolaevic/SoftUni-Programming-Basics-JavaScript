function flowers(input){
    let chrysanthemumCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holidayOrNo = input[4];
    let chrysanthemumPrice = 0;
    let rosesPrice = 0;
    let tulipPrice = 0;
    let totalPrice = 0;
    
    switch(season){
        case "Spring":
        case "Summer":
            chrysanthemumPrice = 2 * chrysanthemumCount;
            rosesPrice = 4.1 * rosesCount;
            tulipPrice = 2.5 * tulipCount;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumPrice = 3.75 * chrysanthemumCount;
            rosesPrice = 4.5 * rosesCount;
            tulipPrice = 4.15 * tulipCount;
            break;
    }
    

    if (holidayOrNo === "Y"){
        chrysanthemumPrice = chrysanthemumPrice + chrysanthemumPrice*0.15;
        rosesPrice = rosesPrice + rosesPrice*0.15;
        tulipPrice = tulipPrice + tulipPrice*0.15;
    }

    totalPrice = chrysanthemumPrice+rosesPrice+tulipPrice;

    if (tulipCount > 7 && season === "Spring"){
        totalPrice = totalPrice * 0.95;
    }

    if (rosesCount >= 10 && season === "Winter"){
        totalPrice = totalPrice * 0.9;
    }
    
    if(chrysanthemumCount + rosesCount + tulipCount > 20){
        totalPrice = totalPrice * 0.8;
    }

    totalPrice = totalPrice + 2;

    console.log(totalPrice.toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"])
