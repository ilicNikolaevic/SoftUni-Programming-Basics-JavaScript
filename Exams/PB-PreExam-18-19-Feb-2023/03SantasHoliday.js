function santasHoliday(input) {
    let daysCount = Number(input[0]);

    let typeRoom = input[1];

    let grade = input[2];

    let nightsCount = daysCount - 1;

    let pricePerNight = 0;

    let totalPrice = 0;

    switch (typeRoom) {
        case 'room for one person':
            pricePerNight = 18;
            totalPrice = pricePerNight * nightsCount;
            break;

        case 'apartment':
            pricePerNight = 25;
            totalPrice = pricePerNight * nightsCount;

            if (daysCount < 10) {
                totalPrice *= 0.7;
            } else if (daysCount >= 10 && daysCount <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;

        case 'president apartment':
            pricePerNight = 35;
            totalPrice = pricePerNight * nightsCount;

            if (daysCount < 10) {
                totalPrice *= 0.9;
            } else if (daysCount >= 10 && daysCount <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break;
    }

    switch (grade) {
        case 'positive': totalPrice += totalPrice * 0.25; break;
        case 'negative': totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));

}

santasHoliday(["2",
    "apartment",
    "positive"])



