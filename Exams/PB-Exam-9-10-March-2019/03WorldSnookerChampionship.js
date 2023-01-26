function snooker(input){
    let phase = input[0];
    let typeTicket = input[1];
    let countTickets = Number(input[2]);
    let picWithTrophy = input[3];
    let priceForTicket = 0;
    let totalPrice = 0;
    let pic = false;

    switch(phase){
        case "Quarter final":
            switch(typeTicket){
                case "Standard": priceForTicket = 55.50;
                    break;
                case "Premium": priceForTicket = 105.20;
                    break;
                case "VIP": priceForTicket = 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch(typeTicket){
                case "Standard": priceForTicket = 75.88;
                    break;
                case "Premium": priceForTicket = 125.22;
                    break;
                case "VIP": priceForTicket = 300.40;
                    break;
            }
            break;
        case "Final":
            switch(typeTicket){
                case "Standard": priceForTicket = 110.10;
                    break;
                case "Premium": priceForTicket = 160.66;
                    break;
                case "VIP": priceForTicket = 400;
                    break;
            }
            break;
    }

    totalPrice = priceForTicket*countTickets;

    if(totalPrice > 4000){
        totalPrice = totalPrice*0.75;
        pic = true;
    } else if (totalPrice > 2500) {
        totalPrice = totalPrice*0.9;
    }

    if (picWithTrophy === "Y" && pic === false){
        totalPrice = totalPrice + (countTickets*40);
    }

    console.log(totalPrice.toFixed(2));
}

snooker(["Quarter final",
"Standard",
"11",
"N"])


