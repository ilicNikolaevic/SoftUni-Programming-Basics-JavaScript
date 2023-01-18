function harvest(input) {
    let vineyardX = Number(input[0]);
    let grapesKgFromQuadM = Number(input[1]);
    let neededLiterWine = Number(input[2]);
    let workers = Number(input[3]);

    let vineyardForWine = vineyardX * 0.4;
    let allKgGrapesForWine = vineyardForWine * grapesKgFromQuadM;
    let littersWine = allKgGrapesForWine / 2.5;
    if (littersWine >= neededLiterWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(littersWine)} liters.`)
        console.log(`${Math.ceil(littersWine - neededLiterWine)} liters left -> ${Math.ceil((littersWine - neededLiterWine) / workers)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(neededLiterWine - littersWine)} liters wine needed.`)
    }
}

harvest(["1020", "1.5", "425", "4"])