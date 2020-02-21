const getMovieGenres = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const movieGenres = await fetch(apiUrl, { method: "GET" });
    const genres = await movieGenres.json();
    return genres;
  } catch (error) {
    console.log(error);
  }
};
getMovieGenres();

const callApi = async () => {
  movieGenres = await getMovieGenres();
  const genres = movieGenres.genres;
  const listIntoDom = await genres.forEach(genre => {
    //console.log(genre);
    let ul = document.getElementById("genreList");

    ul.appendChild(
      document.createElement("li")
    ).innerHTML = `Genre naam:  ${genre.name}, id: ${genre.id}`;
  });
};

callApi();

const getMyBestMovie = async function() {
  const apiUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=The+green+mile`;
  try {
    const myBestMovie = await fetch(apiUrl, { method: "GET" });
    const bestMovie = await myBestMovie.json();
    const bestMovieTitle = bestMovie.results[0].title;
    //console.log(bestMovieTitle);
    let ul = document.getElementById("topMovieList");

    ul.appendChild(document.createElement("a")).innerHTML = bestMovieTitle;
  } catch (error) {
    console.log(error);
  }
};
getMyBestMovie();

const getBestRatedMovie = async function() {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}&sort_by=popularity.desc`;
  try {
    const bestRatedMovies = await fetch(apiUrl, { method: "GET" });
    const bestRatedMovie = await bestRatedMovies.json();
    const bestMovieTitles = bestRatedMovie.results;
    console.log(bestMovieTitles);

    bestMovieTitles.forEach(bestMovieTitle => {
      const ul = document.getElementById("top-movies");
      const li = document.createElement("li");
      const textnode = document.createTextNode(bestMovieTitle.title);
      li.appendChild(textnode);
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};
getBestRatedMovie();
