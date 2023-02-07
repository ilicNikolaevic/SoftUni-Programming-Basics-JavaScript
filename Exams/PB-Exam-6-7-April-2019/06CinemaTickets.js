function cinemaTickets(input){
    let index = 0;
    let movieName = input[index];
    index++;

    let ticketsCount = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while(movieName !== "Finish"){
        let freeSpaces = Number(input[index]);
        index++;

        let currentTicket = input[index];
        index++;

        let busySpaces = 0;

        while(currentTicket !== "End"){
            ticketsCount++;
            switch(currentTicket){
                case "student":
                    studentTickets++;
                    break;
                case "standard": 
                    standardTickets++;
                    break;
                case "kid": 
                    kidTickets++;
                    break;
            }

            busySpaces++;

            if(busySpaces === freeSpaces){
                break;
            }

            currentTicket = input[index];
            index++;
        }
        let percentFull = (busySpaces / freeSpaces)*100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        movieName = input[index];
        index++;
    }

    console.log(`Total tickets: ${ticketsCount}`);

    let percentStudents = (studentTickets / ticketsCount)*100;
    let percentStandards = (standardTickets / ticketsCount)*100;
    let percentKids = (kidTickets / ticketsCount)*100;


    console.log(`${percentStudents.toFixed(2)}% student tickets.`);
    console.log(`${percentStandards.toFixed(2)}% standard tickets.`);
    console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
