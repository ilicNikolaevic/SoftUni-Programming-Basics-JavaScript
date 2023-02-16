function house(input) {
    let n = Number(input[0]);

    let endPointRoof = 0;

    if (n % 2 !== 0) {
        endPointRoof = (n + 1) / 2;
    } else {
        endPointRoof = n / 2;
    }

    let starsCountInRowRoof = 2;

    for (let i = 1; i <= endPointRoof; i++) {

        if (n % 2 !== 0 && i === 1) {

            console.log(`${'-'.repeat((n - 1) / 2)}${'*'}${'-'.repeat((n - 1) / 2)}`);
            starsCountInRowRoof++;
        } else if (n % 2 === 0 && i === 1) {

            console.log(`${'-'.repeat((n / 2) - 1)}${'*'.repeat(starsCountInRowRoof)}${'-'.repeat((n / 2) - 1)}`);
            starsCountInRowRoof += 2;

        } else if (i === endPointRoof) {

            console.log(`${'*'.repeat(n)}`);

        } else {
            console.log(`${'-'.repeat((n - starsCountInRowRoof) / 2)}${'*'.repeat(starsCountInRowRoof)}${'-'.repeat((n - starsCountInRowRoof) / 2)}`)
            starsCountInRowRoof += 2;
        }
    }

    let endPointBase = n - endPointRoof;

    for (let i = 1; i <= endPointBase; i++) {
        console.log(`|${'*'.repeat(n - 2)}|`);
    }
}


house(['5']);

// --*--
// -***-
// *****
// |***|
// |***|
