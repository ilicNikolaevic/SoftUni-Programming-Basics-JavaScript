function fruitMarket(input0, input1, input2, input3, input4){
    let priceStrawberries = Number(input0);
    let quantityBananas = Number(input1);
    let quantityOranges = Number(input2);
    let quantityRaspberries = Number(input3);
    let quantityStrawberries = Number(input4);
    let priceRaspberries = priceStrawberries*0.5;
    let priceOranges = priceRaspberries*0.6;
    let priceBananas = priceRaspberries*0.2;
    let totalPrice = (priceStrawberries*quantityStrawberries) + (priceBananas*quantityBananas) + (priceOranges*quantityOranges) + (priceRaspberries*quantityRaspberries);

    console.log(`${totalPrice.toFixed(2)}`);
}

fruitMarket("48", "10", "3.3", "6.5", "1.7")

