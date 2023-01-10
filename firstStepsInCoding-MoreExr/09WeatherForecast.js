function weather(input){
    let string = input[0];

    if(string === "sunny"){
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

weather(["suny"])