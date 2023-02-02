function renovation(input){
    let index = 0;

    let wallHeight = Number(input[index]);
    index++;

    let wallWidth = Number(input[index]);
    index++;

    let percentSpaceNoPaint = Number(input[index]);
    index++;

    let spaceForPaint = (wallHeight*wallWidth*4);
    spaceForPaint -= Math.ceil(spaceForPaint*(percentSpaceNoPaint / 100));

    let command = input[index];
    index++;

    while(command !== "Tired!"){
        let litersPaint = Number(command);

        spaceForPaint -= litersPaint;

        if(spaceForPaint <= 0){
            break;
        }

        command = input[index];
        index++;
    }

    if (spaceForPaint > 0){
        console.log(`${spaceForPaint} quadratic m left.`)
    } else if(spaceForPaint < 0){
        console.log(`All walls are painted and you have ${Math.abs(spaceForPaint)} l paint left!`);
    } else {
        console.log("All walls are painted! Great job, Pesho!");
    }
}

renovation(["2",
"3",
"25",
"6",
"7",
"8"])

