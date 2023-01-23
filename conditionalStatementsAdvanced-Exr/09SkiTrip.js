function skiTrip(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];
    let roomPricePerNight = 0;
    let nights = days - 1;
    let finalPrice = 0;

    switch(roomType){
        case "room for one person": roomPricePerNight = 18.00;
        break;
        case "apartment": roomPricePerNight = 25.00;
        break;
        case "president apartment": roomPricePerNight = 35.00;
        break;
    }

    finalPrice = roomPricePerNight*nights;

    if (days < 10){
        if (roomType === "apartment"){
            finalPrice = finalPrice*0.7;
        } else if (roomType === "president apartment"){
            finalPrice = finalPrice*0.9;
        }
    } else if (days >= 10 && days<=15){
        if (roomType === "apartment"){
            finalPrice = finalPrice*0.65;
        } else if (roomType === "president apartment"){
            finalPrice = finalPrice*0.85;
        }
    } else {
        if (roomType === "apartment"){
            finalPrice = finalPrice*0.5;
        } else if (roomType === "president apartment"){
            finalPrice = finalPrice*0.8;
        }
    }

    if (rate === "positive"){
        finalPrice = finalPrice + finalPrice*0.25;
    } else {
        finalPrice = finalPrice*0.9;
    }

    console.log(finalPrice.toFixed(2));

}

skiTrip(["2",
"apartment",
"positive"])