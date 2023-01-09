function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;

    let sumForNylon = (nylon+2)*nylonPrice
    let neededPaint = (paint + paint*0.10)*paintPrice
    let neededThinner = thinner*thinnerPrice;
    let sumForMaterials = sumForNylon+neededPaint+neededThinner+0.40;
    let sumForWork = (sumForMaterials*0.30)*hoursForWork;
    let finalSum = sumForMaterials+sumForWork;

    console.log(finalSum);
}

repainting(["10", "11", "4", "8"])