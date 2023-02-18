function pinCodes(input) {

    let firstDigitEndPoint = Number(input[0]);
    let secondDigitEndPoint = Number(input[1]);
    let thirdDigitEndPoint = Number(input[2]);

    for (let first = 2; first <= firstDigitEndPoint; first++) {

        for (let second = 2; second <= secondDigitEndPoint; second++) {

            for (let third = 2; third <= thirdDigitEndPoint; third++) {

                let secondIsPrime = true;

                for (let divider = 2; divider <= 7; divider++) {
                    if (divider === second) {
                        break;
                    }

                    if (second % divider === 0) {
                        secondIsPrime = false;
                        break;
                    }
                }

                if (first % 2 === 0 && third % 2 === 0 && secondIsPrime) {
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
}

pinCodes(["8",
"2",
"8"])

