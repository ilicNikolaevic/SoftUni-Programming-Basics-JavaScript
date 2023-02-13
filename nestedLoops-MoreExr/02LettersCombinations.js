function lettersCombinations(input) {

    let startLetter = input[0];

    let endLetter = input[1];

    let notIncludeLetter = input[2];

    let startPoint = startLetter.charCodeAt();
    let endPoint = endLetter.charCodeAt();
    let notInclude = notIncludeLetter.charCodeAt();

    let counter = 0;
    let result = '';

    for (let first = startPoint; first <= endPoint; first++) {

        for (let second = startPoint; second <= endPoint; second++) {

            for (let third = startPoint; third <= endPoint; third++) {

                if (first !== notInclude && second !== notInclude && third !== notInclude) {
                    counter++;

                    let outputFirst = String.fromCharCode(first);
                    let outputSecond = String.fromCharCode(second);
                    let outputThird = String.fromCharCode(third);

                    result += `${outputFirst}${outputSecond}${outputThird} `;
                }
            }
        }
    }

    console.log(`${result}${counter}`);
}

lettersCombinations(['f', 'k', 'h'])