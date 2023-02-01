function exam(input) {
    let index = 0;
    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let sumGrade = 0;
    let gradesCount = 0;
    let badGradesCount = 0;
    let lastProblem = "";

    while (problemName !== "Enough") {
        lastProblem = problemName;
        if (problemGrade <= 4) {
            badGradesCount++;
            if (badGradesCount === maxBadGrades) {
                console.log(`You need a break, ${badGradesCount} poor grades.`)
                return;
            }
        }

        sumGrade += problemGrade;
        gradesCount++;
        problemName = input[index];
        index++;
        problemGrade = Number(input[index]);
        index++;
    }

    console.log(`Average score: ${(sumGrade / gradesCount).toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`)
}

exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

