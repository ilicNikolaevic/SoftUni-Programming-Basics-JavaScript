function grandpaStavri(input) {
    let index = 0;

    let days = Number(input[index]);
    index++;

    let totalLiters = 0;

    let sumDegrees = 0;

    for (let i = 1; i <= days; i++) {

        let currentLiters = Number(input[index]);
        index++;

        let currentDegreesPerLiter = Number(input[index]);
        index++;

        totalLiters += currentLiters;

        sumDegrees += (currentDegreesPerLiter * currentLiters);
    }

    let avgDegrees = sumDegrees / totalLiters;


    console.log(`Liter: ${totalLiters.toFixed(2)}`);

    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38) {

        console.log('Not good, you should baking!');
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {

        console.log('Super!');
    } else {

        console.log('Dilution with distilled water!');
    }
}

grandpaStavri(["2",
"200",
"43",
"200",
"40"])

