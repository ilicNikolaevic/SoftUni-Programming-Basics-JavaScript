function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let output = "";
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                output += `L${i}${j} `
            } else if (i % 2 === 0) {
                output += `O${i}${j} `
            } else {
                output += `A${i}${j} `
            }

        }

        console.log(output)
    }


}

building(["9",

    "5"])