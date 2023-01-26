function seriesCalc(input){
    let serial = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let timeForEpisode = Number(input[3]);
    let advertisement = timeForEpisode*0.2;
    let totalTime = ((seasonsCount*episodesCount)*timeForEpisode) + ((seasonsCount*episodesCount)*advertisement)+(10*seasonsCount)

    console.log(`Total time needed to watch the ${serial} series is ${Math.floor(totalTime)} minutes.`);
}

seriesCalc(["Riverdale",
"3",
"21",
"45"])

