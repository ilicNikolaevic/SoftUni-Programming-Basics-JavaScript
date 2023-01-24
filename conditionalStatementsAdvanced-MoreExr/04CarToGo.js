function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let typeCar = "";
    let classCar = "";
    let priceCar = 0;

    if(budget <= 100){
        classCar = "Economy class";
        if (season === "Summer"){
            typeCar = "Cabrio";
            priceCar = budget * 0.35;
        } else {
            typeCar = "Jeep";
            priceCar = budget * 0.65;
        }
    } else if(budget <= 500){
        classCar = "Compact class";
        if (season === "Summer"){
            typeCar = "Cabrio";
            priceCar = budget * 0.45;
        } else {
            typeCar = "Jeep";
            priceCar = budget * 0.8;
        }
    } else {
        classCar = "Luxury class";
        typeCar = "Jeep";
        priceCar = budget * 0.9;
    }

    console.log(`${classCar}`);
    console.log(`${typeCar} - ${priceCar.toFixed(2)}`);
}

carToGo(["99.99", "Summer"]);
