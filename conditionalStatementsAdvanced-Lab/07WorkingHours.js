function workingHours(input){
    let hour = Number(input[0]);
    let day = input[1];
    let isOpen = false;

    if (day !== "Sunday" && hour >= 10 && hour <= 18){
        isOpen = true;
    }

    if(isOpen){
        console.log("open");
    } else {
        console.log("closed")
    }
}

workingHours(["11", "Sunday"])