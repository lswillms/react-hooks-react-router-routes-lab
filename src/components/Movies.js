import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
       <h1>Movies Pages</h1>
       {movies.map(movie => {
      return (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time} minutes</p>
          <ul>
            {movie.genres.map(movie => {
              return (
                <li key={movie}>{movie}</li>
              )
            })}
          </ul>
        </div>
      )
    })}
  </div>
);
}


export default Movies;
