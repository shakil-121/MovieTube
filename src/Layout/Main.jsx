import React from 'react';
import Navbar from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    );
};

export default Main;