import React, { useState, useEffect } from "react";
import {
    addMovieToServer,
    getMovies,
    uploadImage,
    deleteMovieFromServer,
    updateMovieToServer
} from "../../Services/MovieService";
import AddMovie from "../Admin-AddMovie/Admin-AddMovie";
import EditMovie from "../Admin-EditMovie/Admin-EditMovie";
import Admin_MovieList from "../Admin-MovieList/Admin-MovieList";

function ManageMovie(props) {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState();
    const [action, setAction] = useState("add");

    useEffect(() => {
        refreshPage();
    }, []);

    function refreshPage() {
        getMovies()
            .then((json) => {
                setMovies(json);
            })
            .catch((err) => { });
    }

    function handleInputChange(e) {
        setCurrentMovie({
            ...currentMovie,
            [e.target.id]: e.target.value,
        });
    }

    async function handleImageChange(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        await uploadImage(formData).then((res) => {
            const url = res.url;
            setCurrentMovie({
                ...currentMovie,
                image: url,
            });
        });
    }

    function resetInput(e) {
        e.target.value = "";
    }

  async function addMovie(e) {
    await addMovieToServer(currentMovie);
    setCurrentMovie({});
    refreshPage();
  }

  async function deleteMovie(e) {
    const result = await deleteMovieFromServer(e.target.value);
    refreshPage();
  }

  async function updateMovie(e) {
    await updateMovieToServer(currentMovie);
    setAction("add");
    refreshPage();
  }

  async function editMovie(e) {
    e.preventDefault();
    let movieToUpdate = {};
    movies.forEach((movie) => {
      if (movie._id === e.target.value) {
        movieToUpdate = movie;
      }
    });
    setCurrentMovie(movieToUpdate);
    setAction("edit");
  }

    if (props.user.role !== 'admin') {
        return <h2>Only admin can manage movies</h2>;
    }
  
    return (
        <div className="table">
            {action === "add" ? (
                <AddMovie
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                    resetInput={resetInput}
                    addMovie={addMovie}
                />
            ) : (
                <EditMovie
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                    resetInput={resetInput}
                    updateMovie={updateMovie}
                    movie={currentMovie}
                />
            )}

            <Admin_MovieList
                movies={movies}
                editMovie={editMovie}
                deleteMovie={deleteMovie}
            />
        </div>
    );
}
export default ManageMovie;
