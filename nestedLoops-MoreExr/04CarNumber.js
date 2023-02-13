function carNumbers(input) {

    let startPoint = Number(input[0]);
    let endPoint = Number(input[1]);
    let result = '';

    for (let first = startPoint; first <= endPoint; first++) {

        for (let second = startPoint; second <= endPoint; second++) {

            for (let third = startPoint; third <= endPoint; third++) {

                for (let fourth = startPoint; fourth <= endPoint; fourth++) {

                    if (first % 2 === 0 && fourth % 2 !== 0 && first > fourth && (second + third) % 2 === 0) {
                        result += `${first}${second}${third}${fourth} `;
                    }

                    if (first % 2 !== 0 && fourth % 2 === 0 && first > fourth && (second + third) % 2 === 0) {
                        result += `${first}${second}${third}${fourth} `;
                    }
                }
            }
        }
    }

    console.log(result);
}

carNumbers(['5', '8']);