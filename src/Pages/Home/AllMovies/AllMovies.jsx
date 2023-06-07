import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { RiMovie2Fill} from "react-icons/ri";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);


  return (
    <div className="container" style={{height:"100%"}}>
        <h1 className="text-white pt-5"><RiMovie2Fill></RiMovie2Fill> All Movies</h1>
      <div className="row py-5">
        {
          //single movie info get by map this movies array
          movies.map((movie) => (<MovieCard
             key={movie.show.id} movie={movie.show}></MovieCard>
          ))
        }
      </div>
    </div>
  );
};

export default AllMovies;
