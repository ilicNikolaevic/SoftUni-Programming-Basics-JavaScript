function cake(input) {
    let index = 0;

    let cakeWidth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    index++;

    let cakePieces = cakeWidth * cakeLength;
    let cakeOver = false;

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let currentPieces = Number(command);

        cakePieces -= currentPieces;

        if (cakePieces <= 0) {
            cakeOver = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (!cakeOver) {
        console.log(`${cakePieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
    }
}


cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

