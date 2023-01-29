function salary(input){
    let index = 0;
    let openedTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let noSalary = false;

    for(i = 1; i <= openedTabs; i++){
        let currentTab = input[index];
        index++;

        switch(currentTab){
            case "Facebook": salary -=150; break;
            case "Instagram": salary -=100; break;
            case "Reddit": salary -=50; break;
        }

        if(salary <= 0){
            noSalary = true;
            break;
        }
    }

    if (noSalary){
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary)
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


