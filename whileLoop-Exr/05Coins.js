function coins(input) {
    let sum = Number(input[0]);
    let sumInCoins = Math.round(sum * 100);
    let coinsCount = 0;

    while (sumInCoins !== 0) {
        if (sumInCoins >= 200) {
            sumInCoins -= 200;
        } else if (sumInCoins >= 100) {
            sumInCoins -= 100;
        } else if (sumInCoins >= 50) {
            sumInCoins -= 50
        } else if (sumInCoins >= 20) {
            sumInCoins -= 20;
        } else if (sumInCoins >= 10) {
            sumInCoins -= 10;
        } else if (sumInCoins >= 5) {
            sumInCoins -= 5;
        } else if (sumInCoins >= 2) {
            sumInCoins -= 2;
        } else {
            sumInCoins -= 1;
        }

        coinsCount++
    }

    console.log(coinsCount)

}

coins(["2.73"])