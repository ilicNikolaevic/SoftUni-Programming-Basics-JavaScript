function areaOfFigures(input){
    let index = 0;
    let figure = input[0];
    index++;

    if (figure === 'square') {
        let a = Number(input[index]);
        let area = a*a;
        console.log(area.toFixed(3));
    } else if (figure === 'rectangle'){
        let a = Number(input[index]);
        index++;
        let b = Number(input[index]);
        let area = a*b;
        console.log(area.toFixed(3));
    } else if (figure === 'circle') {
        let r = Number(input[index]);
        let area = Math.PI*r*r;
        console.log(area.toFixed(3));
    } else if (figure === 'triangle') {
        let a = Number(input[index]);
        index++;
        let h = Number(input[index]);
        let area = a*h/2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"])