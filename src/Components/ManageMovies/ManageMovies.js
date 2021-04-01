import React, { useState, useEffect } from "react";
import { addMovieToServer, getMovies, uploadImage } from "../../Services/MovieService";
import AddMovie from "../AddMovie/AddMovie";

import MovieList from "../MovieList/MovieList";

function ManageMovie() {
  const [movies, setMovies] = useState([]);
  const [imageFile, setImageFile] = useState();
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

  function handleImageChange(e){

    setImageFile(e.target.files[0]);

   
  }

  function handleInputChange(e){
      if(e.target.files){
        setImageFile(e.target.files[0]);

      }
    setCurrentMovie({
        ...currentMovie,
        [e.target.id]: e.target.value,
    });


  }

  async function addMovie(e){
    
    const formData = new FormData();

    formData.append("image", imageFile);
    const imageUrl = await uploadImage(formData);



    setCurrentMovie({
        ...currentMovie,
        image: imageUrl
    })
      await addMovieToServer(currentMovie);
      refreshPage();
  }

  return (
    <div className="table-responsive">

        <AddMovie handleInputChange={handleInputChange} image={imageFile} addMovie={addMovie}/>
      <MovieList movies={movies} />
    </div>
  );
}
export default ManageMovie;
