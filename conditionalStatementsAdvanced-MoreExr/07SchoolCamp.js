function schoolCamp (input){
    let season = input[0];
    let typeGroup = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);
    let priceForNight = 0;
    let typeSport = "";
    let finalPrice = 0;

    switch(season){ //price
        case "Winter":
            switch(typeGroup){ //typeSport
                case "boys":
                    priceForNight = 9.60;
                    typeSport = "Judo"
                    break;
                case "girls":
                    priceForNight = 9.60;
                    typeSport = "Gymnastics"
                    break;
                case "mixed":
                    priceForNight = 10;
                    typeSport = "Ski";
                    break;
            }
            break;

        case "Spring":
            switch(typeGroup){ //typeSport
                case "boys":
                    priceForNight = 7.2;
                    typeSport = "Tennis"
                    break;
                case "girls":
                    priceForNight = 7.2;
                    typeSport = "Athletics"
                    break;
                case "mixed":
                    priceForNight = 9.5;
                    typeSport = "Cycling";
                    break;
            }
            break;
        case "Summer":
            switch(typeGroup){ //typeSport
                case "boys":
                    priceForNight = 15;
                    typeSport = "Football"
                    break;
                case "girls":
                    priceForNight = 15;
                    typeSport = "Volleyball"
                    break;
                case "mixed":
                    priceForNight = 20;
                    typeSport = "Swimming";
                    break;
            }
            break;
    }

    finalPrice = (priceForNight*nightsCount)*studentsCount;

    if (studentsCount >= 50){
        finalPrice = finalPrice*0.5;
    } else if (studentsCount >= 20){
        finalPrice = finalPrice*0.85;
    } else if (studentsCount >= 10) {
        finalPrice = finalPrice*0.95;
    }

    console.log(`${typeSport} ${finalPrice.toFixed(2)} lv.`);

}

schoolCamp(["Winter", "mixed", "9", "15"]);
