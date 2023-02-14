function secretDoor(input) {
    let firstNumEnd = Number(input[0]);

    let secondNumEnd = Number(input[1]);

    let thirdNumEnd = Number(input[2]);

    for (let firstNum = 1; firstNum <= firstNumEnd; firstNum++) {

        for (let secondNum = 1; secondNum <= secondNumEnd; secondNum++) {

            for (let thirdNum = 1; thirdNum <= thirdNumEnd; thirdNum++) {

                let isPrime = true;

                for (let prime = 2; prime < secondNum; prime++) {

                    if (secondNum % prime === 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (firstNum % 2 === 0 && thirdNum % 2 === 0 && isPrime && secondNum <= 7 && secondNum >= 2) {
                    console.log(`${firstNum} ${secondNum} ${thirdNum}`);
                }
            }
        }
    }
}

secretDoor(['8', '2', '8']);