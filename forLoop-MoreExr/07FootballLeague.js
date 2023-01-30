function football(input){
    let index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;
    let fansCount = Number(input[index]);
    index++;
    let aCount = 0;
    let bCount = 0;
    let vCount = 0;
    let gCount = 0;
    for(i = 1; i <= fansCount; i++){
        let curSector = input[index];
        index++;

        switch(curSector){
            case "A": aCount++; break;
            case "B": bCount++; break;
            case "V": vCount++; break;
            case "G": gCount++; break;   
        }
    }
    console.log(`${((aCount/fansCount)*100).toFixed(2)}%`);
    console.log(`${((bCount/fansCount)*100).toFixed(2)}%`);
    console.log(`${((vCount/fansCount)*100).toFixed(2)}%`);
    console.log(`${((gCount/fansCount)*100).toFixed(2)}%`);
    console.log(`${((fansCount/stadiumCapacity)*100).toFixed(2)}%`);
}

football(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);

