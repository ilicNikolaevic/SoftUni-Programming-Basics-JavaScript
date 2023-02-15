function songOfTheWheels(input) {

    let controlValue = Number(input[0]);

    let resultStr = '';

    let counter = 0;

    let password = '';

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && a * b + c * d === controlValue) {
                        counter++;

                        resultStr += `${a}${b}${c}${d} `;

                        if (counter === 4) {
                            password = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }

    if (resultStr !== '') {
        console.log(resultStr);
    }

    if (password !== '') {
        console.log(`Password: ${password}`);
    } else {
        console.log('No!');
    }
}

songOfTheWheels(['55']);