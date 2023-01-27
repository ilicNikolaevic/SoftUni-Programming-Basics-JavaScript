function paintingEggs(input){
    let size = input[0];
    let color = input[1];
    let batches = Number(input[2]);
    let priceForBatch = 0;
    let profit = 0;

    switch(size){
        case "Large":
            switch(color){
                case "Red": priceForBatch = 16; break;
                case "Green": priceForBatch = 12; break;
                case "Yellow": priceForBatch = 9; break;
            }
            break;
        case "Medium":
            switch(color){
                case "Red": priceForBatch = 13; break;
                case "Green": priceForBatch = 9; break;
                case "Yellow": priceForBatch = 7; break;
            }
            break;
        case "Small":
            switch(color){
                case "Red": priceForBatch = 9; break;
                case "Green": priceForBatch = 8; break;
                case "Yellow": priceForBatch = 5; break;
            }
            break;
    }

    profit = (priceForBatch*batches)*0.65;

    console.log(`${profit.toFixed(2)} leva.`);
}

paintingEggs(["Small",
"Yellow",
"3"])


