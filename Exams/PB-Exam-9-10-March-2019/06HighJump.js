function highJump(input){
    let index = 0;
    let finalGoal = Number(input[index]);                                 
    index++;

    let tempGoal = finalGoal - 30;
    let jumps = 0;
    let isFaild = false;
    
    while(tempGoal <= finalGoal){
        for(let i = 1; i <= 4; i++){
            if (i === 4){
                isFaild = true;
                break;
            }
            jumps++;
            let currentJump = Number(input[index]);
            index++;

            if(currentJump > tempGoal){
                tempGoal += 5;
                break;
            } else if (currentJump <= tempGoal){
                continue;
            }
        }

        if(isFaild){
            break;
        }

    }
    if(isFaild){
        console.log(`Tihomir failed at ${tempGoal}cm after ${jumps} jumps.`)
    } else {
        console.log(`Tihomir succeeded, he jumped over ${finalGoal}cm after ${jumps} jumps.`)
    }

}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])









