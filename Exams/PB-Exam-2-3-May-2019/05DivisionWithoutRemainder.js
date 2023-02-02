function division(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (i = 1; i <= n; i++) {
        let currentNum = Number(input[index]);
        index++;
        if (currentNum % 4 === 0) {
            p3Counter++;
        }

        if (currentNum % 3 === 0) {
            p2Counter++;
        }

        if (currentNum % 2 === 0) {
            p1Counter++;
        }
    }

    let p1Percent = (p1Counter / n) * 100;
    let p2Percent = (p2Counter / n) * 100;
    let p3Percent = (p3Counter / n) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
}

division(["3",
    "3",
    "6",
    "9"])

