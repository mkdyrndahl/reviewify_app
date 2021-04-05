import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import {getMovies} from "../../Services/MovieService";

const SearchPage = (props) => {
  const [MovieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState([]);

  const fetchData = async () => {

    getMovies()
    .then((data) => {
        setMovieList(data);
        setMovieListDefault(data);
    })
  };

  const updateInput = async (input) => {
    const filtered = MovieListDefault.filter((movie) => {
      return movie.title.toLowerCase().includes(input.target.value.toLowerCase());
    });
    setMovieList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <SearchBar updateInput={updateInput} />
      <MovieList movies={movieList} />
    </>
  );
};

export default SearchPage;
