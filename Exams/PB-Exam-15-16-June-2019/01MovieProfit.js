function movieProfit(input) {
    let movie = input[0];
    let daysCount = Number(input[1]);
    let ticketsCountPerDay = Number(input[2]);
    let priceForTicket = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let totalProfit = (ticketsCountPerDay * priceForTicket) * daysCount;
    totalProfit = totalProfit - (totalProfit * (percentForCinema / 100));

    console.log(`The profit from the movie ${movie} is ${(totalProfit).toFixed(2)} lv.`);
}

movieProfit(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"])

