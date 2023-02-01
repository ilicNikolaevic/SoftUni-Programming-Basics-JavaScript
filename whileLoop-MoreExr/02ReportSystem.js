function reportSystem(input){
    let index = 0;

    let neededSum = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let cashPaymentCount = 0;
    let cashSumTotal = 0;
    let cardPaymentCount = 0;
    let cardSumTotal = 0;
    let sumCollected = false;

    while (command !== "End"){
        counter++;
        let currentPayment = Number(command);

        if(counter%2 === 0){

            if(currentPayment < 10){
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cardPaymentCount++;
                cardSumTotal+=currentPayment;
                neededSum -= currentPayment;
            }
            

        } else {
            if(currentPayment > 100){
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashPaymentCount++;
                cashSumTotal+=currentPayment;
                neededSum-=currentPayment;
            }
        }

        if(neededSum <= 0){
            sumCollected = true;
            break;
        }

        command = input[index];
        index++;

    }

    if(sumCollected){
        console.log(`Average CS: ${(cashSumTotal / cashPaymentCount).toFixed(2)}`);
        console.log(`Average CC: ${(cardSumTotal / cardPaymentCount).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["600", "86", "150", "98", "227", "End"]);





