function travelAgency(input){
    let city = input[0];
    let typePackage = input[1];
    let vipOrNo = input[2];
    let daysCount = Number(input[3]);
    let priceForDay = 0;
    let priceTotal = 0;
    let isInvalid = false;

    switch(city){
        case "Bansko":
        case "Borovets":
            switch(typePackage){
                case "withEquipment": priceForDay = 100; 
                    if (vipOrNo === "yes"){
                        priceForDay = priceForDay*0.9;
                    }
                    break;
                case "noEquipment": priceForDay = 80; 
                    if (vipOrNo === "yes"){
                        priceForDay = priceForDay*0.95;
                }
                    break;
                default: console.log("Invalid input!");
                    isInvalid = true; 
                    break;
            }
            break;
        case "Varna":
        case "Burgas":
            switch(typePackage){
                case "withBreakfast": priceForDay = 130; 
                    if (vipOrNo === "yes"){
                        priceForDay = priceForDay*0.88;
                    }
                    break;
                case "noBreakfast": priceForDay = 100; 
                    if (vipOrNo === "yes"){
                        priceForDay = priceForDay*0.93;
                    }
                    break;
                default: console.log("Invalid input!");
                    isInvalid = true;
                    break;
            }
            break;

        default: console.log("Invalid input!");
            isInvalid = true;
            break;
    }

    priceTotal = priceForDay*daysCount;

    if (daysCount > 7){
        priceTotal = priceTotal - priceForDay;
    }
    
    if (daysCount < 1 && isInvalid === false){
        console.log("Days must be positive number!");
    } else if (daysCount > 1 && isInvalid === false){
        console.log(`The price is ${priceTotal.toFixed(2)}lv! Have a nice time!`)
    } 
}

travelAgency(["Varna",
"withBreakfast",
"no",
"0"])




