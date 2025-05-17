import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "e76787d8eeaa8d734a585742fa1b7c82";

// https://api.themoviedb.org/3/movie/popular?api_key=e76787d8eeaa8d734a585742fa1b7c82
// https://api.themoviedb.org/3//discover/movie?api_key=e76787d8eeaa8d734a585742fa1b7c82&with_genres=12

const getPopularMovies = axios.get(
  baseURL + "movie/popular?api_key=" + API_KEY
);
export default { getPopularMovies };
