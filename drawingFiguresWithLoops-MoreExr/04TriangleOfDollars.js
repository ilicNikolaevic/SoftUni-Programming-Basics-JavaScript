function triangleOfDollars(input) {

    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        let result = '';

        for (let col = 1; col <= row; col++) {

            result += '$ ';
        }

        console.log(result);
    }
}

triangleOfDollars(['3']);