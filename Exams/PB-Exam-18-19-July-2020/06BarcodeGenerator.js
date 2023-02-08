function barcodeGenerator(input) {
    let startNum = input[0];
    let endNum = input[1];

    let startA = Number(startNum[0]);
    let endA = Number(endNum[0]);
    let startB = Number(startNum[1]);
    let endB = Number(endNum[1]);
    let startC = Number(startNum[2]);
    let endC = Number(endNum[2]);
    let startD = Number(startNum[3]);
    let endD = Number(endNum[3]);
    let output = "";

    for (let a = startA; a <= endA; a++) {
        for (let b = startB; b <= endB; b++) {
            for (let c = startC; c <= endC; c++) {
                for (let d = startD; d <= endD; d++) {
                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        output += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }
    console.log(output);
}

barcodeGenerator(["3256",
"6579"])


