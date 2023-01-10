function fishLand(input){
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safritKg = Number(input[3]);
    let clamKg = Number(input[4]);
    let clamPrice = 7.50;
    let bonitoPrice = mackerelPrice + mackerelPrice*0.6;
    let bonitoSum = bonitoKg*bonitoPrice;
    let safridPrice = sprinklePrice + sprinklePrice*0.8;
    let safridSum = safridPrice*safritKg
    let clamSum = clamKg*clamPrice;
    let finalSum = bonitoSum+safridSum+clamSum;

    console.log(finalSum.toFixed(2));

}

fishLand(["6.90", "4.20", "1.5", "2.5", "1" ]);


