class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

function getPG(movieList) {
  return movieList.filter((movie) => movie.rating === "PG");
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Creating an array of Movie instances
const movieList = [
  new Movie("Casino Royale", "Eon Productions", "PG"),
  new Movie("salim", "vijay antony prduction", "PG-13"),
  new Movie("pitchaikaran", "vijay antony prduction"),
  new Movie("bigil", "kalanithimaran", "R"),
];

// Calling the getPG function to get an array of PG-rated movies
const pgMovies = getPG(movieList);

// Printing the results
console.log("All Movies:");
movieList.forEach((movie) => {
  console.log(`${movie.title} - ${movie.studio} - ${movie.rating}`);
});

console.log("\nPG Movies:");
pgMovies.forEach((movie) => {
  console.log(`${movie.title} - ${movie.studio} - ${movie.rating}`);
});
