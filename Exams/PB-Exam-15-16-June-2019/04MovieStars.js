function movieStars(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while(command !== "ACTION"){
        let salary = 0;

        if(command.length > 15){
            salary = budget*0.2;
        } else {
            salary = Number(input[index]);
            index++;
        }

        budget-=salary;

        if(budget <= 0){
            break;
        }

        command = input[index];
        index++;
    }

    if(budget >= 0){
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        budget = Math.abs(budget);
        console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
    }
}

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])

