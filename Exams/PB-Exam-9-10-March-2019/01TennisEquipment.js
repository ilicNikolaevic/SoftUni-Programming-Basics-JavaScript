function tennisEquipment(input){
    let priceRocket = Number(input[0]);
    let countRockets = Number(input[1]);
    let countSneakers = Number(input[2]);
    let priceSneakers = 1/6 * priceRocket;
    let priceOthers = ((priceRocket*countRockets)+(priceSneakers*countSneakers))*0.2;
    let totalPrice = (priceRocket*countRockets)+(priceSneakers*countSneakers)+priceOthers;
    console.log(`Price to be paid by Djokovic ${Math.floor(1/8*totalPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(7/8*totalPrice)}`);

}

tennisEquipment(["850", "4", "2"])