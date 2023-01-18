function transport(input){
    let km = Number(input[0]);
    let tariff = input[1];
    let price = 0;

    if(km >= 100){
        price = km*0.06;
    } else if (km >= 20) {
        price = km*0.09;
    } else {
        if (tariff === 'day') {
            price = km*0.79 + 0.70;
        } else if (tariff === 'night') {
            price = km*0.9 + 0.70;
        }
    }
    console.log(price.toFixed(2));
}

transport(["180", "night"]);