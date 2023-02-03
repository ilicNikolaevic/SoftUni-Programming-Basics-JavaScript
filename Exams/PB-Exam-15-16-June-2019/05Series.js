function series(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let serialsCount = Number(input[index]);
    index++;

    let totalPrice = 0;

    for(let i = 1; i <= serialsCount; i++){
        let serialName = input[index];
        index++;
        let price = Number(input[index]);
        index++;

        switch(serialName){
            case "Thrones": price*=0.5; break;
            case "Lucifer": price*=0.6; break;
            case "Protector": price*=0.7; break;
            case "TotalDrama": price*=0.8; break;
            case "Area": price*=0.9; break;
        }

        totalPrice+=price;
    }

    if(budget>=totalPrice){
        console.log(`You bought all the series and left with ${(budget-totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalPrice-budget).toFixed(2)} lv. more to buy the series!`);
    }
}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

