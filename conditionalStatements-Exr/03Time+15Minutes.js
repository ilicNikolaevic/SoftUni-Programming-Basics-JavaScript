function time15mins(input) {
    let inputHours = Number(input[0]);
    let inputMins = Number(input[1]);
    let finalHours = 0;
    let finalMins = 0;
    if (inputMins < 45) {
        finalMins = inputMins + 15;
        finalHours = inputHours;
    } else {
        finalMins = inputMins-45;
        finalHours = inputHours + 1;
    }

    if (finalHours === 24){
        finalHours = 0;
    }

    if (finalMins <= 9) {
        console.log(`${finalHours}:0${finalMins}`);
    } else {
        console.log(`${finalHours}:${finalMins}`);
    }
}

time15mins(["23", "59"]);