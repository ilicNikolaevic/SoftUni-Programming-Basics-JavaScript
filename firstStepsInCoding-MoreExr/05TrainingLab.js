function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);

    let wCm = w*100;
    let hCm = h*100-100;
    let rows = Math.floor(hCm / 70);
    let columns = Math.floor(wCm / 120);

    let workDesks = rows*columns-3;

    console.log(workDesks)
}

trainingLab(["15", "8.9"]);