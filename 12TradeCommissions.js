function commissions(input){
    let town = input[0];
    let profit = Number(input[1]);
    let isInvalid = false;
    let commission = 0;

    if (profit >= 0 && profit <= 500){
        switch(town){
            case "Sofia": commission = 0.05; break;
            case "Varna": commission = 0.045; break;
            case "Plovdiv": commission = 0.055; break;
            default: isInvalid = true; break;
        }
    } else if (profit > 500 && profit <= 1000) {
        switch(town){
            case "Sofia": commission = 0.07; break;
            case "Varna": commission = 0.075; break;
            case "Plovdiv": commission = 0.08; break;
            default: isInvalid = true; break;
        }
    } else if (profit > 1000 && profit <= 10000){
        switch(town){
            case "Sofia": commission = 0.08; break;
            case "Varna": commission = 0.10; break;
            case "Plovdiv": commission = 0.12; break;
            default: isInvalid = true; break;
        }
    } else if (profit > 10000){
        switch(town){
            case "Sofia": commission = 0.12; break;
            case "Varna": commission = 0.13; break;
            case "Plovdiv": commission = 0.145; break;
            default: isInvalid = true; break;
        }
    } else {
        isInvalid = true;
    }

    if(isInvalid){
        console.log("error")
    } else {
        console.log((profit*commission).toFixed(2));
    }
}

commissions(["Kaspichan", "-50"])