function change(input){
    let countBitcoins = Number(input[0]);
    let countYuans = Number(input[1]);
    let percentCommission = Number(input[2]);
    let valueBitcoins = 1168;
    let valueEuro = 1.95;
    let valueDollar = 1.76;
    let valueYuan = 0.15*valueDollar;

    let totalInLeva = (countBitcoins*valueBitcoins)+(countYuans*valueYuan);
    let totalInEuro = totalInLeva / valueEuro;
    totalInEuro = totalInEuro - (totalInEuro*percentCommission/100);

    console.log(totalInEuro.toFixed(2))
}

change(["7",
"50200.12",
"3"])

