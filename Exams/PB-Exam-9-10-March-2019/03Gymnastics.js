function gymnastics(input){
    let country = input[0];
    let device = input[1];
    let assessmentDifficulty = 0;
    let assessmentPerformance = 0;
    let assessmentTotal = 0;
    let percent = 0;

    switch(country){
        case "Russia":
            switch(device){
                case "ribbon":
                    assessmentDifficulty = 9.100;
                    assessmentPerformance = 9.400;
                    break;
                case "hoop": 
                    assessmentDifficulty = 9.300;
                    assessmentPerformance = 9.800;
                    break;
                case "rope": 
                    assessmentDifficulty = 9.600;
                    assessmentPerformance = 9.000;
                    break;
            }
            break;
        case "Bulgaria":
            switch(device){
                case "ribbon":
                    assessmentDifficulty = 9.600;
                    assessmentPerformance = 9.400;
                    break;
                case "hoop": 
                    assessmentDifficulty = 9.550;
                    assessmentPerformance = 9.750;
                    break;
                case "rope": 
                    assessmentDifficulty = 9.500;
                    assessmentPerformance = 9.400;
                    break;
            }
            break;
        case "Italy":
            switch(device){
                case "ribbon":
                    assessmentDifficulty = 9.200;
                    assessmentPerformance = 9.500;
                    break;
                case "hoop": 
                    assessmentDifficulty = 9.450;
                    assessmentPerformance = 9.350;
                    break;
                case "rope": 
                    assessmentDifficulty = 9.700;
                    assessmentPerformance = 9.150;
                    break;
            }
            break;
    }
    
    assessmentTotal = assessmentDifficulty+assessmentPerformance;
    percent = 100-(assessmentTotal*100/20);
    
    console.log(`The team of ${country} get ${assessmentTotal.toFixed(3)} on ${device}.`);
    console.log(`${percent.toFixed(2)}%`);

}

gymnastics(["Russia",
"rope"])

