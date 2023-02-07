function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let taxTotal = 0;
    let daysIndex = 0;



    for (let i = 1; i <= days; i++) {
        daysIndex++;
        let normalHourTax = 1;
        let taxForDay = 0;


        for (let j = 1; j <= hours; j++) {
            let normalHourTax = 1;

            if (i % 2 === 0 && j % 2 !== 0) {
                normalHourTax *= 2.5;
            }

            if (i % 2 !== 0 && j % 2 === 0) {
                normalHourTax *= 1.25;
            }

            taxTotal += normalHourTax;
            taxForDay += normalHourTax;


        }

        console.log(`Day: ${daysIndex} - ${taxForDay.toFixed(2)} leva`);
    }

    console.log(`Total: ${taxTotal.toFixed(2)} leva`);

}

vetParking(["5",
"2"])

