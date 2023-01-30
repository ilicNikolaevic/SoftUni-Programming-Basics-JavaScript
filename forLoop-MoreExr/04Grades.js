function grades(input){
    let index = 0;
    let countStudents = Number(input[index]);
    index++;
    let countUnder3 = 0;
    let countUnder4 = 0;
    let countUnder5 = 0;
    let countTop = 0;
    let totalGrade = 0;
    for(i = 1; i <= countStudents; i++){
        let curGrade = Number(input[index]);
        index++;

        totalGrade+=curGrade;

        if(curGrade <= 2.99){
            countUnder3++;
        } else if (curGrade <= 3.99){
            countUnder4++;
        } else if (curGrade <= 4.99){
            countUnder5++
        } else {
            countTop++;
        }
    }

    let percentTop = (countTop/countStudents)*100;
    let percentUnder5 = (countUnder5/countStudents)*100;
    let percentUnder4 = (countUnder4/countStudents)*100;
    let percentUnder3 = (countUnder3/countStudents)*100;
    let averageGrade = totalGrade/countStudents;

    console.log(`Top students: ${percentTop.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentUnder5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentUnder4.toFixed(2)}%`);
    console.log(`Fail: ${percentUnder3.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);


