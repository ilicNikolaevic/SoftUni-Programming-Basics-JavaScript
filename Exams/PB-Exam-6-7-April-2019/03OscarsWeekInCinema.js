function oscarWeek(input){
    let movie = input[0];
    let typeHall = input[1];
    let countTickets = Number(input[2]);
    let priceForTicket = 0;
    let profit = 0;

    switch(movie){
        case "A Star Is Born":
            switch(typeHall){
                case "normal": priceForTicket = 7.5; break;
                case "luxury": priceForTicket = 10.5; break;
                case "ultra luxury": priceForTicket = 13.5; break;
            }

            break;
        case "Bohemian Rhapsody":
            switch(typeHall){
                case "normal": priceForTicket = 7.35; break;
                case "luxury": priceForTicket = 9.45; break;
                case "ultra luxury": priceForTicket = 12.75; break;
            }

            break;
        case "Green Book":
            switch(typeHall){
                case "normal": priceForTicket = 8.15; break;
                case "luxury": priceForTicket = 10.25; break;
                case "ultra luxury": priceForTicket = 13.25; break;
            }

            break;
        case "The Favourite":
            switch(typeHall){
                case "normal": priceForTicket = 8.75; break;
                case "luxury": priceForTicket = 11.55; break;
                case "ultra luxury": priceForTicket = 13.95; break;
            }

            break;
    }

    profit = priceForTicket*countTickets;

    console.log(`${movie} -> ${profit.toFixed(2)} lv.`);
}

oscarWeek(["A Star Is Born",
"luxury",
"42"])
