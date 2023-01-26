function filmPremiere(input){
    let movie = input[0];
    let package = input[1];
    let ticketsCount = Number(input[2]);
    let priceForTicket = 0;
    let totalPrice = 0;

    switch(movie){
        case "John Wick":
            switch(package){
                case "Drink": priceForTicket = 12; break;
                case "Popcorn": priceForTicket = 15; break;
                case "Menu": priceForTicket = 19; break;
            }
            
            break;
        
        case "Star Wars":
            switch(package){
                case "Drink": priceForTicket = 18; break;
                case "Popcorn": priceForTicket = 25; break;
                case "Menu": priceForTicket = 30; break;
            }
            
            break;
        
        case "Jumanji":
            switch(package){
                case "Drink": priceForTicket = 9; break;
                case "Popcorn": priceForTicket = 11; break;
                case "Menu": priceForTicket = 14; break;
            }
            
            break;
    }

    totalPrice = priceForTicket*ticketsCount;

    if (movie === "Star Wars" && ticketsCount >= 4){
        totalPrice = totalPrice*0.7;
    }

    if (movie === "Jumanji" && ticketsCount === 2){
        totalPrice = totalPrice*0.85;
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji",
"Menu",
"2"])

