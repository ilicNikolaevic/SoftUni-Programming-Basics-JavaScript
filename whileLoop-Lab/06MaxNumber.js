function maxNum(input){
    let index = 0;
    let command = input[index];
    index++;

    let max = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let num = Number(command);

        if(num > max){
            max = num;
        }

        command = input[index];
        index++;
    }

    console.log(max);
}

maxNum(["45",
"-20",
"7",
"99",
"Stop"])

