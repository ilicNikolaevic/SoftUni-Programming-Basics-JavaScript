function travelMachine(input){
    let budget = Number(input[0]);
    let endYear = Number(input[1]);
    let spentMoney = 0;
    let yearsOld = 18;

    for(i = 1800; i <= endYear; i++){
        if (i % 2 === 0){
            spentMoney += 12000;
        } else {
            spentMoney += 12000 + 50*yearsOld;
        } 

        yearsOld++;
    }

    if(budget >= spentMoney){
        console.log(`Yes! He will live a carefree life and will have ${(budget-spentMoney).toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(spentMoney-budget).toFixed(2)} dollars to survive.`);
    }

}

travelMachine(["100000.15", "1808"])





