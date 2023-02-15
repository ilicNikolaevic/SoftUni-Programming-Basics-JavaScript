function primePairs(input) {

    let startFirstNum = Number(input[0]);

    let startSecondNum = Number(input[1]);

    let diffStartEndFirst = Number(input[2]);

    let diffStartEndSecond = Number(input[3]);

    let endFirstNum = startFirstNum + diffStartEndFirst;

    let endSecondNum = startSecondNum + diffStartEndSecond;

    for (let f = startFirstNum; f <= endFirstNum; f++) {

        for (let s = startSecondNum; s <= endSecondNum; s++) {

            let firstIsPrime = true;
            let secondIsPrime = true;

            for (let i = 2; i < f; i++) {

                if (f % i === 0) {
                    firstIsPrime = false;
                    break;
                }
            }

            for (let j = 2; j < s; j++) {

                if (!firstIsPrime) {
                    break;
                }

                if (s % j === 0) {
                    secondIsPrime = false;
                    break;
                }
            }

            if (firstIsPrime && secondIsPrime) {
                console.log(`${f}${s}`);
            }
        }
    }
}

primePairs(['10', '30', '9', '6']);