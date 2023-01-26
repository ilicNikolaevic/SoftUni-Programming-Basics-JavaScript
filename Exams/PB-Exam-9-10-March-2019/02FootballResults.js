function footballResults(input){
    let firstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];
    let wins = 0;
    let losses = 0;
    let draws = 0;

    let num1First = Number(firstResult.charAt(0));
    let num2First = Number(firstResult.charAt(2));
    let num1Second = Number(secondResult.charAt(0));
    let num2Second = Number(secondResult.charAt(2));
    let num1Third = Number(thirdResult.charAt(0));
    let num2Third = Number(thirdResult.charAt(2));

    if (num1First > num2First){
        wins++;
    } else if (num1First < num2First){
        losses++;
    } else {
        draws++;
    }

    if (num1Second > num2Second){
        wins++;
    } else if (num1Second < num2Second){
        losses++;
    } else {
        draws++;
    }

    if (num1Third > num2Third){
        wins++;
    } else if (num1Third < num2Third){
        losses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}

footballResults(["0:2",
"0:1",
"3:3"])


