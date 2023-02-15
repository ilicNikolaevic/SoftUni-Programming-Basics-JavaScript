function squareFrame(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {

        if (i === 1 || i === n) {

            console.log(`+ ${'- '.repeat(n - 2)}+`);

        } else {

            for (let j = 1; j <= n - 2; j++) {
                console.log(`| ${'- '.repeat(n - 2)}|`);

                if (j !== n - 2) {
                    i++;
                };
            }
        }
    }
}

function squareFrameAnother(input) {

    let n = Number(input[0]);

    console.log(`+ ${'- '.repeat(n - 2)}+`);

    for (let i = 1; i <= n - 2; i++) {
        console.log(`| ${'- '.repeat(n - 2)}|`);
    }

    console.log(`+ ${'- '.repeat(n - 2)}+`);
}

squareFrameAnother(['6']);