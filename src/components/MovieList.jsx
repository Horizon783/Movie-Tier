import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieList() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    const res = await GlobalApi.getPopularMovies;
    console.log(res.data.results);
    setMovies(res.data.results);
    console.log(movies);

    // return res.data.result;
  }
  useEffect(() => {
    try {
      getMovies();
    } catch (err) {
      console.log("something went wrong " + err);
    }
  }, []);
  return (
    <div className='movie-image flex gap-[10px] p-5 overflow-x-auto scrollbar-none scroll-smooth'>
      {movies.map((movie, idx) => {
        return (
          idx < 10 && <MovieCard image={IMAGE_BASE_URL + movie.backdrop_path} />
        );
      })}
    </div>
  );
}

export default MovieList;
