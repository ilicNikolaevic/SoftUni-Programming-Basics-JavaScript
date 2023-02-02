function club(input){
    let index = 0;

    let targetProfit = Number(input[index]);
    index++;

    let nameCoctail = input[index];
    index++;

    let quantityCoctails = Number(input[index]);
    index++;

    let profitTotal = 0
    let profitDone = false;

    while(nameCoctail !== "Party!"){
        let priceCoctail = nameCoctail.length;
        let curPrice = priceCoctail*quantityCoctails;

        if(curPrice % 2 !== 0){
            curPrice*=0.75;
        }

        profitTotal += curPrice;

        if (profitTotal >= targetProfit){
            profitDone = true;
            break;
        }

        nameCoctail = input[index];
        index++;
        quantityCoctails = Number(input[index]);
        index++;
    }

    if(profitDone){
        console.log("Target acquired.");
    } else {
        console.log(`We need ${(targetProfit - profitTotal).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${profitTotal.toFixed(2)} leva.`);
}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
