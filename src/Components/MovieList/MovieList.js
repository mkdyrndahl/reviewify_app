import React from "react";
import Movie from "../Movie/Movie";

function MovieList(props){
    return(
        <table className="table align-middle">
        <thead>
          <tr>
          <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Genres</th>
            <th scope="col">Length</th>
            <th scope="col">Director</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie, index) => (
            <Movie
              key={movie._id}
              id={movie._id}
              title={movie.title}
              genres={movie.genres}
              length={movie.length}
              director={movie.director}
              description={movie.description}
              image={movie.image}
              editMovie={props.editMovie}
              deleteMovie={props.deleteMovie}
            />
          ))}
        </tbody>
      </table>
    )
}
export default MovieList;