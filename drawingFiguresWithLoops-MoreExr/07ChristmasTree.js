function christmasTree(input) {
    let n = Number(input[0]);

    let space = ' ';

    for (let i = 0; i <= n; i++) {

        let outputRow = '';

        if (i === 0) {
            outputRow += `${space.repeat((n + 1))}|`

        } else {

            outputRow += `${space.repeat(n - i)}${'*'.repeat(i)} | ${'*'.repeat(i)}${space.repeat(n - i)}`
        }

        console.log(outputRow);
    }
}

christmasTree(['3']);


//    |
//  * | *
// ** | **
//*** | ***
