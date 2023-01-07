function projectCreation(input) {
    let timeForProject = 3;
    let name = input[0];
    let projects = Number(input[1]);

    console.log (`The architect ${name} will need ${timeForProject*projects} hours to complete ${projects} project/s.`);
}

projectCreation(["George", "4"]);