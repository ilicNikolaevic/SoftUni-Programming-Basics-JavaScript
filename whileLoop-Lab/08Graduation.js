function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let sumGrades = 0;
    let badGradesCount = 0;
    let isExcluded = false;

    let i = 1;
    while(i <= 12){
        let grade = Number(input[index]);
        index++;
        if (grade < 4){
            badGradesCount++;
            if (badGradesCount > 1){
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`)
            }
            continue;
        }

        sumGrades+= grade;
        i++;
    }

    if (!isExcluded){
        console.log(`${name} graduated. Average grade: ${(sumGrades/12).toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

