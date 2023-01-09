function foodDelivery(input){
    let chickenMenues = Number(input[0]);
    let fishMenues = Number(input[1]);
    let vegetableMenues = Number(input[2]);

    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetablePrice = 8.15;
    let sumForMenues = chickenMenues*chickenPrice + fishMenues*fishPrice + vegetableMenues*vegetablePrice;
    let dessert = 0.2 * sumForMenues;
    let delivery = 2.50;

    let finalSum = sumForMenues+dessert+delivery;

    console.log(finalSum);
}

foodDelivery(["2", "4", "3"]);