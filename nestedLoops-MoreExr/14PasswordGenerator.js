function passGenerator(input) {

    let n = Number(input[0]);

    let l = Number(input[1]);

    let startDiggitSymbols = 'a'.charCodeAt();

    let endDiggitSymbols = startDiggitSymbols + l;

    let result = '';

    for (let firstSymbol = 1; firstSymbol <= n; firstSymbol++) {

        for (let secondSymbol = 1; secondSymbol <= n; secondSymbol++) {

            for (let thirdSymbol = startDiggitSymbols; thirdSymbol < endDiggitSymbols; thirdSymbol++) {

                for (let fourthSymbol = startDiggitSymbols; fourthSymbol < endDiggitSymbols; fourthSymbol++) {

                    for (let fifthSymbol = 1; fifthSymbol <= n; fifthSymbol++) {

                        let thirdSymbolDiggit = String.fromCharCode(thirdSymbol);
                        let fourthSymbolDiggit = String.fromCharCode(fourthSymbol);

                        if (fifthSymbol > firstSymbol && fifthSymbol > secondSymbol) {
                            result += `${firstSymbol}${secondSymbol}${thirdSymbolDiggit}${fourthSymbolDiggit}${fifthSymbol} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

passGenerator(['4', '2'])