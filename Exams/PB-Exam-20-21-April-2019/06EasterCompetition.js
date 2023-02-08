function easterCompet(input){
    let index = 0;
    let breadsCount = Number(input[index]);
    index++;

    let maxGrade = 0;
    let winner = "";

    for (let i = 1; i <= breadsCount; i++){
        let name = input[index];
        index++;

        let currentGradeStr = input[index];
        index++;

        let totalGrade = 0;

        while(currentGradeStr !== "Stop"){
            let currentGrade = Number(currentGradeStr);

            totalGrade += currentGrade;

            currentGradeStr = input[index];
            index++;
        }

        console.log(`${name} has ${totalGrade} points.`);

        if(totalGrade > maxGrade){
            console.log(`${name} is the new number 1!`);
            maxGrade = totalGrade;
            winner = name;
        }
    }

    console.log(`${winner} won competition with ${maxGrade} points!`);
}

easterCompet(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);

