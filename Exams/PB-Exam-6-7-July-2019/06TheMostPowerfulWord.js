function powerfulWord (input){
    let index = 0;

    let word = input[index];
    index++;

    let winnerSum = 0;
    let winnerWord = "";

    while(word !== "End of words"){
        let currentSum = 0;
        
        for(let i = 0; i < word.length; i++){
            let currentDiggit = word[i];

            let sumFromDiggit = currentDiggit.charCodeAt();

            currentSum += sumFromDiggit;
        }

        switch(word[0]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "Y": 
                currentSum *= word.length; 
                break;
            default: 
                currentSum /= word.length;
                currentSum = Math.floor(currentSum);
                break; 
        }

        if (currentSum > winnerSum){
            winnerSum = currentSum;
            winnerWord = word;
        }

        word = input[index];
        index++;
    }

    console.log(`The most powerful word is ${winnerWord} - ${winnerSum}`);
}

powerfulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])

