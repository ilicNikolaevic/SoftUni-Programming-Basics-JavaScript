function trainTheTrainers(input){
    let index = 0;
    let evaluateCount = Number(input[index]);
    index++;

    let presentationName = input[index];
    index++;

    let avgGradeTotal = 0;
    let presentationCount = 0;

    while(presentationName !== "Finish"){
        presentationCount++;
        let avgGradeCurPresent = 0;
        for(let i = 1; i <= evaluateCount; i++){
            let currentGrade = Number(input[index]);
            index++;

            avgGradeCurPresent += currentGrade;
        }

        avgGradeCurPresent/=evaluateCount;
        avgGradeTotal += avgGradeCurPresent;

        console.log(`${presentationName} - ${avgGradeCurPresent.toFixed(2)}.`);

        presentationName = input[index];
        index++;
    }

    avgGradeTotal /= presentationCount;

    console.log(`Student's final assessment is ${avgGradeTotal.toFixed(2)}.`);
}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])