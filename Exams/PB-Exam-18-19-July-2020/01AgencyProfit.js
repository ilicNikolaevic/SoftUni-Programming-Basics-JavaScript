function agencyProfit(input){
    let name = input[0];
    let countTicketsAdults = Number(input[1]);
    let countTicketsKids = Number(input[2]);
    let priceTicketAdult = Number(input[3]);
    let serviceTax = Number(input[4]);
    let priceTicketKid = priceTicketAdult*0.3;
    let totalProfit = (((countTicketsAdults+countTicketsKids)*serviceTax) + (countTicketsAdults*priceTicketAdult) + (countTicketsKids*priceTicketKid)) * 0.2;
    
    console.log(`The profit of your agency from ${name} tickets is ${totalProfit.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

