function bakeRace(input){
    let juniorsCount = Number(input[0]);
    let seriorsCount = Number(input[1]);
    let routeType = input[2];
    let taxJunior = 0;
    let taxSenior = 0;
    let taxTotal = 0;

    switch(routeType){
        case "trail":
            taxJunior = 5.50;
            taxSenior = 7;
            break;
        case "cross-country":
            taxJunior = 8;
            taxSenior = 9.50;
            break;
        case "downhill":
            taxJunior = 12.25;
            taxSenior = 13.75;
            break;
        case "road":
            taxJunior = 20;
            taxSenior = 21.50;
    }

    taxTotal = taxJunior*juniorsCount + taxSenior*seriorsCount;

    if (routeType === "cross-country" && (juniorsCount+seriorsCount) >= 50){
        taxTotal = taxTotal*0.75;
    }

    taxTotal = taxTotal*0.95;

    console.log(`${taxTotal.toFixed(2)}`)
}   

bakeRace(["10", "10", "downhill"])


