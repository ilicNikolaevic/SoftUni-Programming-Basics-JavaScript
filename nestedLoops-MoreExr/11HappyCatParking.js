function happyCat(input) {
    let days = Number(input[0]);

    let hours = Number(input[1]);

    let totalSum = 0;

    for (let d = 1; d <= days; d++) {

        let sumForDay = 0;

        for (let h = 1; h <= hours; h++) {

            let taxForHour = 1;

            if (d % 2 === 0 && h % 2 !== 0) {
                taxForHour *= 2.5;
            }

            if (d % 2 !== 0 && h % 2 === 0) {
                taxForHour *= 1.25;
            }

            sumForDay += taxForHour;

        }

        console.log(`Day: ${d} - ${sumForDay.toFixed(2)} leva`);

        totalSum += sumForDay;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCat(['2', '5']);