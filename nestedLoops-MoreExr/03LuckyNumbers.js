function luckyNums(input) {

    let n = Number(input[0]);
    let result = '';

    for (let first = 1; first <= 9; first++) {

        for (let second = 1; second <= 9; second++) {

            for (let third = 1; third <= 9; third++) {

                for (let fourth = 1; fourth <= 9; fourth++) {

                    let firstSum = first + second;
                    let secondSum = third + fourth;

                    if (firstSum === secondSum && n % firstSum === 0) {

                        result += `${first}${second}${third}${fourth} `;
                    }
                }
            }
        }
    }

    console.log(result);
}

luckyNums(['24']);