function numbersDivisible9(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let string = ""
    
    for(i = startNum; i <= endNum; i++){
        let currentNum = i;
        if (currentNum%9 === 0){
            sum+=i;
            string+=i + "\n";
        }            
    }

    console.log(`The sum: ${sum}`);
    console.log(string)
   
}

numbersDivisible9(["100", "200"]);