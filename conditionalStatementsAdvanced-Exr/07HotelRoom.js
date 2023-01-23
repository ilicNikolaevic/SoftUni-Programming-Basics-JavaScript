function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartPrice = 65;
            if (nights > 7 && nights <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (nights > 14) {
                studioPrice = studioPrice * 0.70;
                apartPrice = apartPrice * 0.90;
            }
            break;

        case "June":
        case "September":
            studioPrice = 75.20;
            apartPrice = 68.70;
            if (nights > 14) {
                studioPrice = studioPrice * 0.80;
                apartPrice = apartPrice * 0.90;
            }

            break;

        case "July":
        case "August":
            studioPrice = 76;
            apartPrice = 77;
            if (nights > 14) {
                apartPrice = apartPrice * 0.90;
            }

            break;
    }

    console.log(`Apartment: ${(apartPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`)
}

hotelRoom(["August",
"20"])