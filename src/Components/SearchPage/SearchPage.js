import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import UserOptions from "../UserOptions/UserOptions";
import {getMovies} from "../../Services/MovieService";
import { getReviews } from "../../Services/ReviewService";

const SearchPage = (props) => {
  const [MovieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState([]);
  const [reviews, setReviews] = useState([]);

  calculateRating();

  const fetchData = async () => {
    getMovies()
    .then((data) => {
        setMovieList(data);
        setMovieListDefault(data);
    })
    getReviews().then((data)=>{
      setReviews(data);
      
    })
  };

  const updateInput = async (input) => {
    const filtered = MovieListDefault.filter((movie) => {
      return movie.title.toLowerCase().includes(input.target.value.toLowerCase());
    });
    setMovieList(filtered);
  };


  function calculateRating(){
    movieList.forEach(movie => {
      var totalRate = 0;
      var noOfReviews = 0;

      reviews.forEach(review=>{
        console.log(review.rating);
        if(review.movieID === movie._id){
          totalRate += parseInt(review.rating);
          noOfReviews++;
        }
      })
      if(totalRate === 0)
      movie["rating"] = 0;
      else
      movie["rating"] = parseFloat(totalRate/noOfReviews).toFixed(1);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <div>
        <SearchBar updateInput={updateInput} />
        <UserOptions user={props.user}/>
      </div>
      <MovieList movies={movieList} />
    </>
  );
};

export default SearchPage;
