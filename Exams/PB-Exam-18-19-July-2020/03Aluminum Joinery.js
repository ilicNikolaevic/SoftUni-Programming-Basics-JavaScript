function aluminum(input){
    let countWindows = Number(input[0]);
    let sizeWindows = input[1];
    let deliveryOrNot = input[2];
    let priceForOneWindow = 0;
    let isInvalid = false;
    let deliveryPrice = 60;
    let totalPrice = 0;

    if (countWindows < 10){
        isInvalid = true;
    }

    switch(sizeWindows){
        case "90X130":
            priceForOneWindow = 110;
            if (countWindows > 60){
                priceForOneWindow = priceForOneWindow*0.92;
            } else if(countWindows > 30) {
                priceForOneWindow = priceForOneWindow*0.95;
            }
            break;
        case "100X150":
            priceForOneWindow = 140;
            if (countWindows > 80){
                priceForOneWindow = priceForOneWindow*0.9;
            } else if(countWindows > 40) {
                priceForOneWindow = priceForOneWindow*0.94;
            }
            break;
        case "130X180":
            priceForOneWindow = 190;
            if (countWindows > 50){
                priceForOneWindow = priceForOneWindow*0.88;
            } else if(countWindows > 20) {
                priceForOneWindow = priceForOneWindow*0.93;
            }
            break;
        case "200X300":
            priceForOneWindow = 250;
            if (countWindows > 50){
                priceForOneWindow = priceForOneWindow*0.86;
            } else if(countWindows > 25) {
                priceForOneWindow = priceForOneWindow*0.91;
            }
            break;
    }

    totalPrice = countWindows*priceForOneWindow;

    if (deliveryOrNot === "With delivery"){
        totalPrice = totalPrice+deliveryPrice;
    }

    if (countWindows > 99){
        totalPrice = totalPrice*0.96;
    }

    if (!isInvalid){
        console.log(`${totalPrice.toFixed(2)} BGN`);
    } else {
        console.log("Invalid order");
    }
}

aluminum(["2",
"130X180",
"With delivery"])


