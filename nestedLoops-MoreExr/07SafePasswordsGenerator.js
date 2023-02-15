function safePasswords(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let maxCountPasswords = Number(input[2]);

    let generatedPasswordsCount = 0;
    let isEnough = false;

    let startSymbolA = 35;
    let startSymbolB = 64;

    let output = '';

    for (let xSymbol = 1; xSymbol <= a; xSymbol++) {

        for (let ySymbol = 1; ySymbol <= b; ySymbol++) {

            let symbolA = String.fromCharCode(startSymbolA);
            startSymbolA++;

            let symbolB = String.fromCharCode(startSymbolB);
            startSymbolB++;

            if (startSymbolA === 56) {
                startSymbolA = 35;
            }

            if (startSymbolB === 97) {
                startSymbolB = 64;
            }

            output += `${symbolA}${symbolB}${xSymbol}${ySymbol}${symbolB}${symbolA}|`
            generatedPasswordsCount++;

            if (generatedPasswordsCount === maxCountPasswords) {
                isEnough = true;
                break;
            }
        }

        if (isEnough) {
            break;
        }
    }

    console.log(output)
}

safePasswords(['20', '50', '10']);