function sumNumbers(input){
    let index = 0;
    let magicNum = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < magicNum){
        let curNum = Number(input[index]);
        index++;

        sum += curNum;
    }

    console.log(sum);
    
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])
