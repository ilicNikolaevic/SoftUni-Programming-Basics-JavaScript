function cleverLily(input){
    let age = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let totalMoney = 0;
    let moneyForEvenBirthday = 10;

    for(i = 1; i <= age; i++){
        if (i % 2 === 0){
            totalMoney+=moneyForEvenBirthday;
            totalMoney-=1;
            moneyForEvenBirthday+=10;
        } else {
            totalMoney+=pricePerToy;
        }
    }

    if(totalMoney >= washMachinePrice){
        console.log(`Yes! ${(totalMoney-washMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washMachinePrice-totalMoney).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

