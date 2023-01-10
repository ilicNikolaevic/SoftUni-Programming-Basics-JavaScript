function vegetableMarket(input){
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableSold = Number(input[2]);
    let fruitSold = Number(input[3]);

    let profitBgn = vegetablePrice*vegetableSold + fruitPrice*fruitSold;
    let profitEuro = profitBgn/1.94;

    console.log(profitEuro.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);