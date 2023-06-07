import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { RiMovie2Fill } from "react-icons/ri";
import "./AllMovies.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="MovieSection">
      <div className="container" style={{ height: "100%" }}>
        <p className="text-white pt-5 text-center">ONLINE MOVIES STREAMING</p>
        <h2 className="text-white text-center">
          <RiMovie2Fill></RiMovie2Fill>Top Watch Movies
        </h2>
        <div className="md-row  py-5" data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
          {
            //single movie info get by map this movies array
            movies.map((movie) => (
              <MovieCard  key={movie.show.id} movie={movie.show}></MovieCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
