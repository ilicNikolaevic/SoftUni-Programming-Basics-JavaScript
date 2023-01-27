function party(input){
    let countGuesses = Number(input[0]);
    let priceEnvelope = Number(input[1]);
    let budget = Number(input[2]);
    let priceCake = budget*0.1;
    let totalPrice = 0;
    if (countGuesses >= 10 && countGuesses <= 15){
        priceEnvelope = priceEnvelope*0.85;
    } else if (countGuesses > 15 && countGuesses <= 20){
        priceEnvelope = priceEnvelope*0.8;
    } else if (countGuesses > 20){
        priceEnvelope = priceEnvelope*0.75;
    }

    totalPrice = (countGuesses*priceEnvelope)+priceCake;

    if (budget >= totalPrice){
        console.log(`It is party time! ${(budget-totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPrice-budget).toFixed(2)} leva needed.`);
    }
}

party(["8",
"25",
"340"])

