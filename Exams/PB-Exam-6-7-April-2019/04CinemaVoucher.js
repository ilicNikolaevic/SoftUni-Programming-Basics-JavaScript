function cinema(input){
    let index = 0;
    
    let voucherValue = Number(input[index]);
    index++;

    let purchase = input[index];
    index++;

    let tickets = 0;
    let noTickets = 0;
    let itsTiket = false;
    let itsNoTicket = false;
    

    while(purchase !== "End"){
        let purchasePrice = 0;
        if(purchase.length > 8){
            purchasePrice = purchase.charCodeAt(0) + purchase.charCodeAt(1);
            itsTiket = true;
        } else {
            purchasePrice = purchase.charCodeAt(0);
            itsNoTicket = true;
        }

        voucherValue -= purchasePrice;

        if (voucherValue < 0){
            break;
        } else if (itsTiket){
            tickets++;
            itsTiket = false;
        } else if (itsNoTicket){
            noTickets++;
            itsNoTickets = false;
        }
        
        purchase = input[index];
        index++;
    }
    
    console.log(tickets);
    console.log(noTickets);
}

cinema(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"]);



