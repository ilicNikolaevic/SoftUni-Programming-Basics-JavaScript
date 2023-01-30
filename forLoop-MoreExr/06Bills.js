 function bills(input){
    let index = 0;
    let months = Number(input[index]);
    index++;
    let priceWater = 20;
    let priceInternet = 15;
    let othersTotal = 0;
    let electricityTotal = 0;
    for(let i = 1; i <= months; i++){
        let priceElectricity = Number(input[index]);
        index++;
        
        let priceOthers = (priceElectricity+priceInternet+priceWater)*1.2;
        electricityTotal+=priceElectricity;
        othersTotal+=priceOthers; 
    }
    let totalExpensesForAll = ((priceInternet+priceWater)*months) + electricityTotal + othersTotal;
    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${(priceWater*months).toFixed(2)} lv`);
    console.log(`Internet: ${(priceInternet*months).toFixed(2)} lv`);
    console.log(`Other: ${othersTotal.toFixed(2)} lv`);
    console.log(`Average: ${(totalExpensesForAll/months).toFixed(2)} lv`)
 }

 bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
 

