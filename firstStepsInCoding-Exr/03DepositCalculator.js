function depositCalculator(input){
    let deposit = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearInterest = Number(input[2]);

    let sum = deposit + depositPeriod * ((deposit * yearInterest / 100) /12);

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);