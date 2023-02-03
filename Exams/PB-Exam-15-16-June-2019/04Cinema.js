function cinema(input) {
    let index = 0;

    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let ticketPrice = 5;
    let busyPlaces = 0;
    let profit = 0;
    let cinemaIsFull = false;

    while (command !== "Movie time!") {
        let incomingPeople = Number(command);

        if (busyPlaces + incomingPeople > capacity) {
            cinemaIsFull = true;
            break;
        }

        busyPlaces += incomingPeople;

        if (incomingPeople % 3 === 0) {
            profit += incomingPeople * ticketPrice - 5;
        } else {
            profit += incomingPeople * ticketPrice;
        }

        command = input[index];
        index++;
    }

    if (cinemaIsFull) {
        console.log("The cinema is full.");
    } else {
        let placesLeft = capacity - busyPlaces;
        console.log(`There are ${placesLeft} seats left in the cinema.`)
    }

    console.log(`Cinema income - ${profit} lv.`)
}

cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])


