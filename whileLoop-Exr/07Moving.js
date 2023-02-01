function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let freeSpace = width * length * height;
    let noFreeSpace = false;
    let usedFreeSpace = 0;

    let command = input[index];
    index++;

    while (command !== "Done") {
        let currentCartons = Number(command);

        freeSpace -= currentCartons;

        if (usedFreeSpace >= freeSpace) {
            noFreeSpace = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (!noFreeSpace) {
        console.log(`${freeSpace - usedFreeSpace} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${usedFreeSpace - freeSpace} Cubic meters more.`)
    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

