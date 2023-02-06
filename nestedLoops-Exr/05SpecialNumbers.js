function specialNums(input) {
    let n = Number(input[0]);
    let output = "";

    for (let i = 1111; i <= 9999; i++) {
        let curNumberStr = i.toString();
        let isSpecial = true;

        for (let j = 0; j <= 3; j++) {
            let curDigit = Number(curNumberStr[j]);

            if (n % curDigit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            output += `${curNumberStr} `;
        }
    }

    console.log(output);
}

specialNums(["16"])