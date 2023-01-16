function shopping(input){
    let budget = Number(input[0]);
    let countGpu = Number(input[1]);
    let countCpu = Number(input[2]);
    let countRam = Number(input[3]);

    let priceGpu = 250;
    let priceCpu = (countGpu*priceGpu)*0.35;
    let priceRam = (countGpu*priceGpu)*0.10;

    let finalSum = (countGpu*priceGpu)+(countCpu*priceCpu)+(countRam*priceRam);

    if(countGpu > countCpu){
        let discount = 0.15*finalSum;
        finalSum-=discount;
    } 

    if(finalSum <= budget){
        console.log(`You have ${(budget - finalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalSum - budget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45",

"3",

"1",

"1"])