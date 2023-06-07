import React from 'react';
import HeroSection from '../HeroSection';
import AllMovies from '../AllMovies/AllMovies';
import Download from '../Download';

const Home = () => {
    return (
        <div className="" style={{backgroundColor:"#131212"}}>
           <HeroSection></HeroSection>  
           <AllMovies></AllMovies>
           <Download></Download>
        </div>
    );
};

export default Home;