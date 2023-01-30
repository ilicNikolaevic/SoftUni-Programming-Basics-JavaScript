function logistics(input){
    let index = 0;
    let countCargos = Number(input[index]);
    index++;
    let priceTotal = 0;
    let tonsTotal = 0;
    let tonsMicrobus = 0;
    let tonsTruck=0;
    let tonsTrain=0;

    for(i = 1; i<= countCargos; i++){
        let curCargo = Number(input[index]);
        index++;
        tonsTotal+=curCargo;

        if(curCargo <= 3){
            tonsMicrobus+=curCargo;
            priceTotal += 200*curCargo;
        } else if(curCargo <= 11){
            tonsTruck += curCargo;
            priceTotal += 175*curCargo;
        } else {
            tonsTrain += curCargo;
            priceTotal += 120*curCargo;
        }
    }
    
    let avgPricePerTon = priceTotal/tonsTotal;
    let percentMicrobus = (tonsMicrobus/tonsTotal)*100;
    let percentTruck = (tonsTruck/tonsTotal)*100;
    let percentTrain = (tonsTrain/tonsTotal)*100;
    
    console.log(`${avgPricePerTon.toFixed(2)}`);
    console.log(`${percentMicrobus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);

