function tickets(input){
    let budget = Number(input[0]);
    let ticketType = input[1];
    let fans = Number(input[2]);
    let transportPrice = 0;
    let ticketPrice = 0;

    switch(ticketType){
        case "Normal": ticketPrice = 249.99; break;
        case "VIP": ticketPrice = 499.99; break;
    }

    if (fans <= 4){
        transportPrice = budget * 0.75;
    } else if (fans <= 9) {
        transportPrice = budget * 0.6;
    } else if (fans <= 24){
        transportPrice = budget * 0.5;
    } else if (fans <= 49){
        transportPrice = budget * 0.4;
    } else {
        transportPrice = budget * 0.25;
    }

    if (budget >= (transportPrice+(fans*ticketPrice))){
        console.log(`Yes! You have ${(budget-(transportPrice+(fans*ticketPrice))).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${((transportPrice+(fans*ticketPrice))-budget).toFixed(2)} leva.`)
    }
}

tickets(["30000", "VIP", "49"]);



