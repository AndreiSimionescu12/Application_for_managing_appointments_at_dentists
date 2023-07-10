import React from 'react'
import "./Home.css";
import { Navbar } from '../navbar/Navbar';
import { Galerie } from '../galerie/Galerie';
import {Blog} from "../blog/Blog";
import TestiMonials from '../TestiMonials/TestiMonials';
import { Medici } from '../medici/Medici';
import { Footer } from "../footer/Footer";
import { Carousel } from '../carousel/Carousel';

export const Home = () => {
    return (
    <div className="container-fluid p-0">
        <Navbar/>
        <Carousel/>
        <TestiMonials/>
        <Blog/>
        <Galerie/>
        <Medici/>
        <Footer/>
    </div>
    );
  };
