function safari(input){
    let budget = Number(input[0]);
    let litersFuel = Number(input[1]);
    let day = input[2];
    let priceForLiter = 2.1;
    let priceForGuide = 100;
    let totalPrice = (litersFuel*priceForLiter)+priceForGuide;

    switch(day){
        case "Saturday": totalPrice = totalPrice*0.9; break;
        case "Sunday": totalPrice = totalPrice*0.8; break;
    }

    if (budget >= totalPrice){
        console.log(`Safari time! Money left: ${(budget-totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`);
    }
}

safari(["120",
"30",
"Saturday"])

