function vacantion(input){
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForRead = Number(input[2]);
    let hoursForReadAllBook = bookPages / pagesPerHour;
    let hoursPerday = hoursForReadAllBook / daysForRead;

    console.log(hoursPerday)
}

vacantion(["212", "20", "2"]);