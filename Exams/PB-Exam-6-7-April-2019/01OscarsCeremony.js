function oscars(input){
    let rent = Number(input[0]);

    let statues = rent * 0.7;
    let food = statues * 0.85;
    let music = food * 0.5;
    let total = rent+statues+food+music;

    console.log(`${total.toFixed(2)}`)
}

oscars(["5555"])