function rhombusOfStars(input) {
    let n = Number(input[0]);

    let result = '';
    let space = ' ';

    for (let i = 1; i <= n; i++) {
        console.log(`${space.repeat((n - i))}${'* '.repeat(i)}${space.repeat((n - i))}`);
    }

    for (let j = n - 1; j >= 1; j--) {
        console.log(`${space.repeat((n - j))}${'* '.repeat(j)}${space.repeat((n - j))}`);
    }
}

rhombusOfStars(['4']);


//    *    
//   * *   
//  * * *  
// * * * * 
//  * * *  
//   * *   
//    *    