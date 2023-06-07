import React from 'react';
import HeroSection from '../HeroSection';
import AllMovies from '../AllMovies/AllMovies';

const Home = () => {
    return (
        <div className="" style={{backgroundColor:"#131212"}}>
           <HeroSection></HeroSection>  
           <AllMovies></AllMovies>
        </div>
    );
};

export default Home;