function mobileOperator(input){
    let termContract = input[0];
    let typeContract = input[1];
    let internet = input[2];
    let monthsForPay = Number(input[3]);
    let priceForMonth = 0;
    let totalPrice = 0;

    switch(termContract){
        case "one":
            switch(typeContract){
                case "Small": priceForMonth = 9.98; break;
                case "Middle": priceForMonth = 18.99; break;
                case "Large": priceForMonth = 25.98; break;
                case "ExtraLarge": priceForMonth = 35.99; break;
            }
            break;
        case "two":
            switch(typeContract){
                case "Small": priceForMonth = 8.58; break;
                case "Middle": priceForMonth = 17.09; break;
                case "Large": priceForMonth = 23.59; break;
                case "ExtraLarge": priceForMonth = 31.79; break;
            }
            break;
    }

    if (internet === "yes"){
        if(priceForMonth <= 10){
            priceForMonth = priceForMonth + 5.5;
        } else if (priceForMonth <= 30){
            priceForMonth = priceForMonth + 4.35;
        } else {
            priceForMonth = priceForMonth + 3.85;
        }
    }

    if (termContract === "two"){
        priceForMonth = priceForMonth * 0.9625
    }

    totalPrice = priceForMonth*monthsForPay;

    console.log(`${totalPrice.toFixed(2)} lv.`)

}

mobileOperator(["one",
"Small",
"yes",
"10"])



