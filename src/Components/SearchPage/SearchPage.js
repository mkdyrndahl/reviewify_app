import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import {getMovies} from "../../Services/MovieService";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [MovieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState([]);

  const fetchData = async () => {
    // return await fetch("") //what do i fetch here?
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMovieList(data);
    //     setMovieListDefault(data);
    //   });
    getMovies()
    .then((data) => {
        setMovieList(data);
        console.log(MovieList);
    })
  };

  const updateInput = async (input) => {
    const filtered = MovieListDefault.filter((movie) => {
      return movie.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setMovieList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <SearchBar input={input} onChange={updateInput} />
      <MovieList movieList={movieList} />
    </>
  );
};

export default SearchPage;
