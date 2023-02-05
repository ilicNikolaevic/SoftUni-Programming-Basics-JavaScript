function suitcases(input){
    let index = 0;

    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let bagsCount = 0;
    let capacityIsOver = false;
    let counter = 0;

    while(command !== "End"){
        let volumeCurBag = Number(command);
        counter++;
        
        if(counter % 3 === 0){
            volumeCurBag*=1.1;
        }



        capacity -= volumeCurBag;
        
        if(capacity < 0){
            capacityIsOver = true;
            break;
        }
        
        bagsCount++;

        command = input[index];
        index++;
    }

    if(!capacityIsOver){
        console.log("Congratulations! All suitcases are loaded!");
    } else {
        console.log("No more space!");
    }

    console.log(`Statistic: ${bagsCount} suitcases loaded.`)
}

suitcases(["1200",
"200",
"200",
"200",
"600",
"200"])


