function streamOfLetters(input){
    let index = 0;
    let currentChar = input[index];
    index++;
    let bufferString = "";
    let output = "";
    let nOneTime = false;
    let oOneTime = false;
    let cOneTime = false;

    while(currentChar !== "End"){
        if (currentChar === "n" && !nOneTime){
            nOneTime = true;
            currentChar = input[index];
            index++;
            continue;
        }

        if (currentChar === "o" && !oOneTime){
            oOneTime = true;
            currentChar = input[index];
            index++;
            continue;
        }

        if (currentChar === "c" && !cOneTime){
            cOneTime = true;
            currentChar = input[index];
            index++;
            continue;
        }

        if(nOneTime && oOneTime & cOneTime){
            output += bufferString + " ";
            nOneTime = false;
            oOneTime = false;
            cOneTime = false;
            bufferString = "";
            continue;
        }

        switch(currentChar){
            case "a":
            case "A":
            case "b":
            case "B":
            case "c":
            case "C":
            case "d":
            case "D":
            case "e":
            case "E":
            case "f":
            case "F": 
            case "g":
            case "G":
            case "h":
            case "H":
            case "i":
            case "I":
            case "j":
            case "J":
            case "k":
            case "K":
            case "l":
            case "L":
            case "m":
            case "M":
            case "n":
            case "N":
            case "o":
            case "O": 
            case "p":
            case "P":
            case "q":
            case "Q":
            case "r":
            case "R":
            case "s":
            case "S":
            case "t":
            case "T":
            case "u":
            case "U":
            case "v":
            case "V":
            case "w":
            case "W":
            case "x":
            case "X": 
            case "y":
            case "Y":
            case "z":
            case "Z": bufferString += currentChar;
            break;    
        }

        currentChar = input[index];
        index++;
    }
    console.log(output);
}


streamOfLetters(["o", "S", "%", "o", "l","^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);
