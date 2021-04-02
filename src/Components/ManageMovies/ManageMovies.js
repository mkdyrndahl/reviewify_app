import React, { useState, useEffect } from "react";
import { addMovieToServer, getMovies, uploadImage, deleteMovieFromServer } from "../../Services/MovieService";
import AddMovie from "../AddMovie/AddMovie";
import MovieList from "../MovieList/MovieList";

function ManageMovie() {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getMovies()
      .then((json) => {
        setMovies(json);
      })
      .catch((err) => {});

  }

  function handleInputChange(e){
      setCurrentMovie({
        ...currentMovie,
        [e.target.id]: e.target.value,
    });

  }

  async function handleImageChange(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await uploadImage(formData).then((res) => {
     const url = res.url;
     setCurrentMovie({
       ...currentMovie,
       image: url
     });
    })
  }

  function resetInput(e){
    e.target.value="";
  }

  async function addMovie(e){
    console.log(currentMovie);
      await addMovieToServer(currentMovie);
      refreshPage();
  }

  async function deleteMovie(e) {
    const result = await deleteMovieFromServer(e.target.value);
    console.log(result)
    refreshPage();
  }
  

  return (
    <div className="table">
        <AddMovie handleInputChange={handleInputChange}
        handleImageChange={handleImageChange} 
        resetInput={resetInput} addMovie={addMovie}/>
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}
export default ManageMovie;
