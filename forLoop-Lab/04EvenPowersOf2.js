function evenPowers2(input){
    let n = Number(input[0]);

    for(i = 0; i <=n; i+=2){
        let num = Math.pow(2, i);
        console.log(num)
    }

}

evenPowers2(["7"]);