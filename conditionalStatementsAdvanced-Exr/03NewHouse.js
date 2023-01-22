function newHouse(input){
    let typeFlower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(typeFlower){
        case "Roses":
            price = quantity * 5;
            if(quantity > 80){
                price = price - price*0.1;
            }
            break;
        case "Dahlias":
            price = quantity * 3.80;
            if(quantity > 90){
                price = price - price*0.15;
            }
            break;
        case "Tulips":
            price = quantity * 2.80;
            if(quantity > 80){
                price = price - price*0.15;
            }
            break;
        case "Narcissus":
            price = quantity * 3;
            if(quantity < 120){
                price = price + price*0.15;
            }
            break;
        case "Gladiolus":
            price = quantity * 2.50;
            if(quantity < 80){
                price = price + price*0.2;
            }
            break;
    }

    if (price <= budget){
        console.log(`Hey, you have a great garden with ${quantity} ${typeFlower} and ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus",
"119",
"360"])
