function favoriteMovie(input){
    let index = 0;

    let movieName = input[index];
    index++;

    let maxSum = 0;
    let movieNameMax = "";
    let counter = 0;

    while(movieName !== "STOP"){
        counter++;

        if(counter === 7){
            console.log("The limit is reached.");
            break;
        }

        let diggitsCount = movieName.length;
        let tempSum = 0;

        for(let i = 0; i < diggitsCount; i++){
            let currentDigit = movieName[i];

            let currentDigitInAscii = currentDigit.charCodeAt();
            tempSum += currentDigitInAscii;

            if(currentDigitInAscii >= 97 && currentDigitInAscii <= 122){
                tempSum-=diggitsCount*2;
            } else if(currentDigitInAscii >= 65 && currentDigitInAscii <= 90){
                tempSum-=diggitsCount;
            }
        }

        if(tempSum > maxSum){
            maxSum = tempSum;
            movieNameMax = movieName;
        }

        movieName = input[index];
        index++;
    }

    console.log(`The best movie for you is ${movieNameMax} with ${maxSum} ASCII sum.`);
}

favoriteMovie([

"School story 2",
"Shrek 2",
"Ice age",
"STOP"])


