function histogram(input){
    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for(i = 1; i <= n; i++){
        let curNum = Number(input[i]);

        if (curNum < 200){
            p1Count++;
        } else if (curNum <= 399) {
            p2Count++;
        } else if (curNum <= 599){
            p3Count++;
        } else if (curNum <= 799){
            p4Count++;
        } else {
            p5Count++;
        }
    }

    let percentP1 = (p1Count/n)*100;
    let percentP2 = (p2Count/n)*100;
    let percentP3 = (p3Count/n)*100;
    let percentP4 = (p4Count/n)*100;
    let percentP5 = (p5Count/n)*100;

    console.log(`${percentP1.toFixed(2)}%`)
    console.log(`${percentP2.toFixed(2)}%`)
    console.log(`${percentP3.toFixed(2)}%`)
    console.log(`${percentP4.toFixed(2)}%`)
    console.log(`${percentP5.toFixed(2)}%`)
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

