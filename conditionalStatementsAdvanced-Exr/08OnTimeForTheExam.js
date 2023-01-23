function onTime(input) {
 
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);
 
    let examTotalMins = (examHour*60)+examMins;
    let arrivalTotalMins = (arrivalHour*60)+arrivalMins;
    let diff = examTotalMins-arrivalTotalMins;
    let earlyMins = 0;
    let earlyHours = 0;
    let lateMins = 0;
    let lateHours = 0;

    if (diff >= 0 && diff<=30) { // on time
        if (diff === 0){
            console.log("On time");
        } else if (diff <= 30){
            console.log("On time");
            console.log(`${diff} minutes before the start`)
        }

    } else if (diff > 30) { // early
        earlyMins = diff % 60;
        earlyHours = Math.floor(diff / 60);
        if (earlyHours !== 0 && earlyMins <= 9){
            console.log("Early");
            console.log(`${earlyHours}:0${earlyMins} hours before the start`)
        } else if (earlyHours !== 0 && earlyMins > 9) {
            console.log("Early");
            console.log(`${earlyHours}:${earlyMins} hours before the start`)
        } else {
            console.log("Early");
            console.log(`${earlyMins} minutes before the start`);
        }
    } 
    
    else { //late
        diff = Math.abs(diff);
        lateMins = diff % 60;
        lateHours = Math.floor(diff/60);

        if (lateHours !== 0 && lateMins <= 9){
            console.log("Late");
            console.log(`${lateHours}:0${lateMins} hours after the start`);
        } else if (lateHours !== 0 && lateMins > 9){
            console.log("Late");
            console.log(`${lateHours}:${lateMins} hours after the start`);
        } else {
            console.log("Late");
            console.log(`${lateMins} minutes after the start`);
        }
    }
}

onTime(["11",
"30",
"12",
"29"])