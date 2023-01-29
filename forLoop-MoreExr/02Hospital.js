function hospital(input){
    let period = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for(let i = 1; i <= period; i++){
        let patientsForCurDay = Number(input[i]);
        if(i % 3 === 0 && untreatedPatients > treatedPatients){
            doctors++;
        }

        
        if(patientsForCurDay > doctors){
            patientsForCurDay -= doctors;
            untreatedPatients += patientsForCurDay
            treatedPatients += doctors
        } else {
            treatedPatients += patientsForCurDay;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["3", "7", "7", "7"])


