function profit(input){

    let countOneBgn = Number(input[0]);

    let countTwoBgn = Number(input[1]);

    let countFiveBgn = Number(input[2]);

    let sum = Number(input[3]);

    for(let oneBgn = 0; oneBgn <= countOneBgn; oneBgn++){

        for(let twoBgn = 0; twoBgn <= countTwoBgn; twoBgn++){

            for(let fiveBgn = 0; fiveBgn <= countFiveBgn; fiveBgn++){

                if (oneBgn * 1 + twoBgn * 2 + fiveBgn * 5 === sum){
                    console.log(`${oneBgn} * 1 lv. + ${twoBgn} * 2 lv. + ${fiveBgn} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

profit(['5', '3', '1', '7']);