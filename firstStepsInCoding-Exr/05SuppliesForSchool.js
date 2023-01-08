function supplies(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discountPercent = Number(input[3]);
    
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let litersPrice = 1.20;


    let sum = pens*pensPrice + markers*markersPrice + liters*litersPrice;
    let finalSum = sum - (sum * discountPercent/100);

    console.log(finalSum);
}

supplies(["4", "2", "5", "13"])