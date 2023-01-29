function multiplication(input){
    let multiplicator = Number(input[0]);

    for(i = 1; i <= 10; i++){
        console.log(`${i} * ${multiplicator} = ${i*multiplicator}`);
    }

}

multiplication(["5"]);