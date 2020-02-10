// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const movie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", " Jackie", " Living Sneezes."]
};

let bestMovie = function() {
  console.log(
    movie.title +
      "lasts for " +
      movie.duration +
      " minutes." +
      " Stars: " +
      movie.stars
  );
};

bestMovie();
