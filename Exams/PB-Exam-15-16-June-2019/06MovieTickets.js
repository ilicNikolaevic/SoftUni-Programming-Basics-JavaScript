function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    let symbol1 = "";
    let symbol2 = "";
    let symbol3 = "";
    let symbol4 = "";

    for (let i = a1; i <= a2 - 1; i++) {
        for (let j = 1; j <= n - 1; j++) {
            for (let k = 1; k <= n / 2 - 1; k++) {
                symbol1 = String.fromCharCode(i);
                symbol2 = j;
                symbol3 = k;
                symbol4 = i;

                if (i % 2 !== 0 && (i + j + k) % 2 !== 0) {
                    console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
                }
            }
        }
    }
}


movieTickets(["69",
    "72",
    "4 "])


