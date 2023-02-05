function easterBake(input){
    let index = 0;

    let breadsCount = Number(input[index]);
    index++;

    let onePackSugar = 950;
    let onePackFlour = 750;
    let usedSugarTotal = 0;
    let usedFlourTotal = 0;
    let maxUsedSugar = 0;
    let maxUsedFlour = 0;

    for(let i = 1; i <= breadsCount; i++){
        let curSugar = Number(input[index]);
        index++;

        let curFlour = Number(input[index]);
        index++;

        usedSugarTotal += curSugar;
        usedFlourTotal += curFlour;

        if (curSugar > maxUsedSugar){
            maxUsedSugar = curSugar;
        } 

        if (curFlour > maxUsedFlour){
            maxUsedFlour = curFlour;
        }
    }
    
    let neededPacksSugar = usedSugarTotal / onePackSugar;
    let neededPackFlour = usedFlourTotal / onePackFlour;

    console.log(`Sugar: ${Math.ceil(neededPacksSugar)}`);
    console.log(`Flour: ${Math.ceil(neededPackFlour)}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`);

}

easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

