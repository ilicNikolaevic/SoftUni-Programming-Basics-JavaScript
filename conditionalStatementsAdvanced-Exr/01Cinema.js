function cinema(input){
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns= Number(input[2]);
    let ticketPrice = 0;

    if(projectionType === "Premiere"){
        ticketPrice = 12.00;
    } else if (projectionType === "Normal"){
        ticketPrice = 7.50;
    } else {
        ticketPrice = 5.00;
    }

    let finalPrice = rows*columns*ticketPrice;

    console.log(`${finalPrice.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"])