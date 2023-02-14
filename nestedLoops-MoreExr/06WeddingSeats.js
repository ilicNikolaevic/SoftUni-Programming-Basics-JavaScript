function weddingSeats(input) {
    let endSector = input[0];

    let startSector = 'A'.charCodeAt();

    let rowsInStartSector = Number(input[1]);

    let placesInOddRow = Number(input[2]);

    let counter = 0;

    let result = '';

    for (let sector = startSector; sector <= endSector.charCodeAt(); sector++) {

        for (let row = 1; row <= rowsInStartSector; row++) {

            if (row % 2 === 0) {
                for (let place = 0; place < placesInOddRow + 2; place++) {
                    let placeInAscii = place + 97;
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(placeInAscii)}`);
                    counter++;
                }

            } else {

                for (let place = 0; place < placesInOddRow; place++) {
                    let placeInAscii = place + 97;
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(placeInAscii)}`);
                    counter++;
                }
            }
        }
        rowsInStartSector++;
    }

    console.log(counter);
}

weddingSeats(['E', '1', '3']);