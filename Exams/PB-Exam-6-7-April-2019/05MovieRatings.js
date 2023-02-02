function movieRatings(input){
    let index = 0;

    let moviesCount = Number(input[index]);
    index++;

    let maxRating = 1;
    let maxRatingName = "";
    let minRating = 10;
    let minRatingName = "";
    let ratingsSum = 0;

    for (i = 1; i <= moviesCount; i++) {
        let movieName = input[index];
        index++;
        let movieRating = Number(input[index]);
        index++;

        ratingsSum+=movieRating;

        if(movieRating < minRating){
            minRating = movieRating;
            minRatingName = movieName;
        }

        if (movieRating > maxRating){
            maxRating = movieRating;
            maxRatingName = movieName;
        }
    }

    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(ratingsSum/moviesCount).toFixed(1)}`);
}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

