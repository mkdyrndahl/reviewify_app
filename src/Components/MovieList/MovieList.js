import React from "react";
import Movie from "../Movie/Movie";

function MovieList(props){
    return(
        <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Genres</th>
            <th scope="col">Length</th>
            <th scope="col">Director</th>
            <th scope="col">Description</th>
            <th scope="col">Cast</th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie, index) => (
            <Movie
              key={index}
              title={movie.title}
              genres={movie.genres}
              length={movie.length}
              director={movie.director}
              description={movie.description}
              image={movie.image}
            />
          ))}
        </tbody>
      </table>
    )
}
export default MovieList;