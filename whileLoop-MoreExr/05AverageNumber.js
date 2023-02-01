function average(input){
    let n = input[0];
    let sum = 0;
    for(i = 1; i <= n; i++){
        let currentNum = Number(input[i]);
        sum+=currentNum;
    }

    sum/=n;

    console.log(sum.toFixed(2));
}

average(["2", "6", "4"]);

