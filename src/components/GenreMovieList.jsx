import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenreList.genere.map((item, idx) => {
        return (
          idx < 3 && (
            <div>
              <h2 className='p-5'>{item.name}</h2>
              <MovieList />
            </div>
          )
        );
      })}
    </div>
  );
}

export default GenreMovieList;
