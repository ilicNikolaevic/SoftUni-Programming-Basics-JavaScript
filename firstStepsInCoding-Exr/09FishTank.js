function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length*width*high;
    let liters = volume / 1000;
    let finalLiters = liters - (liters * percent / 100);

    console.log(finalLiters);
}

fishTank(["105", "77", "89", "18.5"]);