function bestPlayer(input){
    let index = 0;

    let name = input[index];
    index++;

    let finalGoals = Number.MIN_SAFE_INTEGER;
    let finalName = "";
    let makeHatrick = false;

    while(name !== "END"){
        let goals = Number(input[index]);
        index++;

        if (goals > finalGoals){
            finalGoals = goals;
            finalName = name;
        }

        if(goals >= 3){
            makeHatrick = true;
        }

        if (goals >= 10){
            break;
        }

        name = input[index];
        index++;
    }

    console.log(`${finalName} is the best player!`);

    if(makeHatrick){
        console.log(`He has scored ${finalGoals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${finalGoals} goals.`);
    }
}

bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])



