function pcGameShop(input){
    let soldedGames = Number(input[0]);

    let hearthstoneCount = 0;
    let fortniteCount = 0;
    let overwatchCount = 0;
    let othersCount = 0;

    for(i = 1; i <= soldedGames; i++){
        let curGame = input[i];

        switch(curGame){
            case "Hearthstone": hearthstoneCount++; break;
            case "Fornite": fortniteCount++; break;
            case "Overwatch": overwatchCount++; break;
            default: othersCount++; break;
        }
    }

    let hearthstonePercent = (hearthstoneCount / soldedGames)*100;
    let fortnitePercent = (fortniteCount / soldedGames)*100;
    let overwatchPercent = (overwatchCount / soldedGames)*100;
    let othersPercent = (othersCount / soldedGames)*100;

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fortnitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

