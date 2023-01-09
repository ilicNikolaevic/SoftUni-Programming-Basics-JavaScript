function basketball(input){
    let priceForYear = Number(input[0]);

    let shoes = 0.6 * priceForYear;
    let clothes =0.8 * shoes;
    let ball = 0.25 * clothes;
    let accessories = 0.2 * ball;

    let sum = priceForYear+shoes+clothes+ball+accessories;

    console.log(sum);
}

basketball(["365"]);