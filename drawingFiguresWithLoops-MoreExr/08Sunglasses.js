function sunGlasses(input){
    
    let n = Number(input[0]);
    let space = ' ';

    for(let i = 0; i < n; i++){
        if(i === 0 || i === n - 1) {
            console.log(`${'*'.repeat(2 * n)}${space.repeat(n)}${'*'.repeat(2 * n)}`);

        } else {
            if(i === Math.ceil(n / 2) - 1){
                console.log(`${'*'}${'/'.repeat((n * 2) - 2)}${'*'}${'|'.repeat(n)}${'*'}${'/'.repeat((n * 2) - 2)}${'*'}`);
            } else {
                console.log(`${'*'}${'/'.repeat((n * 2) - 2)}${'*'}${space.repeat(n)}${'*'}${'/'.repeat((n * 2) - 2)}${'*'}`);    
            }
        }

    }

}

sunGlasses(['4']);


// ********    ********
// *//////*||||*//////*
// *//////*    *//////*
// ********    ********



