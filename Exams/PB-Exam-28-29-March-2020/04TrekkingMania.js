function trekking(input){
    let index = 0;
    let groupsCount = input[index];
    index++;
    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandzharo = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;
    let allPeople = 0;

    for(let i = 1; i <= groupsCount; i++){
        let peopleInTheGroup = Number(input[index]);
        index++;
        allPeople+=peopleInTheGroup;

        if (peopleInTheGroup <= 5){
            peopleMusala+=peopleInTheGroup
        } else if (peopleInTheGroup <= 12){
            peopleMonblan+=peopleInTheGroup;
        } else if (peopleInTheGroup <= 25){
            peopleKilimandzharo+=peopleInTheGroup;
        } else if (peopleInTheGroup <= 40){
            peopleK2+=peopleInTheGroup;
        } else {
            peopleEverest+=peopleInTheGroup;
        }

    }

    let percentMusala = (peopleMusala/allPeople)*100;
    let percentMonblan = (peopleMonblan/allPeople)*100;
    let percentKilimandzharo = (peopleKilimandzharo/allPeople)*100;
    let percentK2 = (peopleK2/allPeople)*100;
    let percentEverest = (peopleEverest/allPeople)*100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimandzharo.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);

}

trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
