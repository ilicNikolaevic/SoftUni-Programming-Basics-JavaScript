function challengeWedding(input){
    
    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let freeTables = Number(input[2]);
    
    let result = '';
    let tablesIsOver = false;

        for (let man = 1; man <= menCount; man++){
            
            for(let woman = 1; woman <= womenCount; woman++){

                freeTables -= 1;

                result += `(${man} <-> ${woman}) `;

                if(freeTables === 0){
                    tablesIsOver = true;
                    break;
                }
            }

            if(tablesIsOver){
                break;
            }
        }

    console.log(result);
}

challengeWedding(['5', '8', '40'])