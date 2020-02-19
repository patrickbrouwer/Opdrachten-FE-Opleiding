const API_KEY = "efc69a8f643237bbff1aae7a5aae5333";

const getData = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getData function ", res);
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
