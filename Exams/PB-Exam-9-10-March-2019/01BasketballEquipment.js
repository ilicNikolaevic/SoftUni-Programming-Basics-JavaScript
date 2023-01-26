function basketballEquipment(input){
    let tax = Number(input[0]);
    let priceSneakers = tax*0.6;
    let priceOutfit = priceSneakers*0.8;
    let priceBall = 1/4*priceOutfit;
    let priceAccessories = 1/5*priceBall;
    let totalPrice = tax+priceSneakers+priceOutfit+priceBall+priceAccessories;

    console.log(totalPrice.toFixed(2));
}

basketballEquipment(["550"])
