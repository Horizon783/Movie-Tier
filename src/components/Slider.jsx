import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const screenWidth = window.innerWidth;

function Slider() {
  const elementRef = useRef();
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

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 0;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 0;
  };

  return (
    <div className='relative m-[5px 20px]'>
      <GoArrowLeft
        className='hidden md:block text-white text-[30px] absolute
      mx-8 mt-[250px] cursor-pointer left-0 '
        onClick={() => sliderLeft(elementRef.current)}
      />
      <GoArrowRight
        className='hidden md:block text-white text-[30px] absolute
      mx-8 mt-[250px] cursor-pointer right-0 '
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className='flex overflow-x-auto w-full  scrollbar-none scroll-smooth gap-[10px] p-5'
        ref={elementRef}
      >
        {movies.map((movie) => {
          return (
            <img
              className='min-w-full md:h-[500px]  object-fit rounded-2xl '
              src={IMAGE_BASE_URL + movie.backdrop_path}
              alt='img'
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
