function jurney(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let place = ""; 
    let price = 0;

    if (budget<=100 && season === "summer"){
        destination = "Bulgaria";
        place = "Camp"
        price = 0.3 * budget;
    } else if (budget<=100 && season === "winter") {
        destination = "Bulgaria";
        place = "Hotel"
        price = 0.7 * budget;
    } else if (budget <= 1000 && season === "summer") {
        destination = "Balkans";
        place = "Camp";
        price = 0.4 * budget;
    } else if (budget <= 1000 && season === "winter") {
        destination = "Balkans";
        place = "Hotel";
        price = 0.8 * budget;
    } else {
        destination = "Europe";
        place = "Hotel"
        price = 0.9 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}


jurney(["1500", "summer"])