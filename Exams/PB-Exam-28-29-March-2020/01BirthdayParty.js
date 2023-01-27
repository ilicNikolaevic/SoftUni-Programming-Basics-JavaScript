function birthday(input){
    let rent = Number(input);
    let cake = rent*0.2;
    let drinks = cake*0.55;
    let animator = 1/3 * rent;
    let totalPrice = rent+cake+drinks+animator;

    console.log(totalPrice);
}

birthday(3720);