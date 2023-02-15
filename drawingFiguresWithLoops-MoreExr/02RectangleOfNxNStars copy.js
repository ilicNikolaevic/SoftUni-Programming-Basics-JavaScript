function rectangleNxN(input){
    let n = Number(input[0]);

    for(let i = 1; i <= n; i++){
        
        let result = '';
        
        for(let j = 1; j <= n; j++){

            result += '*';
        }

        console.log(result);
    }
}

rectangleNxN(['2']);