function diamont(input) {

    let n = Number(input[0]);

    let midRow = 0;
    let leftRightDash = 0;

    if (n % 2 === 0) {
        midRow = n / 2;
        leftRightDash = n / 2 - 1;
    } else {
        midRow = Math.floor((n / 2) + 1);
        leftRightDash = Math.ceil((n / 2) - 1);
    }

    for (let i = 1; i <= midRow; i++) {
        if (i === 1) {

            console.log(`${'-'.repeat(leftRightDash)}${'*'.repeat(n - (leftRightDash * 2))}${'-'.repeat(leftRightDash)}`);

        } else if (i === midRow) {

            console.log(`*${'-'.repeat(n - 2)}*`);
            break;

        } else {

            console.log(`${'-'.repeat(leftRightDash)}*${'-'.repeat(n - (2 * leftRightDash) - 2)}*${'-'.repeat(leftRightDash)}`)
        }


        leftRightDash--;
    }

    leftRightDash++;


    for (let i = midRow - 1; i >= 1; i--) {

        if (i === 1) {

            console.log(`${'-'.repeat(leftRightDash)}${'*'.repeat(n - (leftRightDash * 2))}${'-'.repeat(leftRightDash)}`);

        } else {
            console.log(`${'-'.repeat(leftRightDash)}*${'-'.repeat(n - (2 * leftRightDash) - 2)}*${'-'.repeat(leftRightDash)}`);
        }

        leftRightDash++;
    }
}


diamont(['5']);

// --*--
// -*-*-
// *---*
// -*-*-
// --*--

diamont(['8']);

// ---**---
// --*--*--
// -*----*-
// *------*
// -*----*-
// --*--*--
// ---**---







