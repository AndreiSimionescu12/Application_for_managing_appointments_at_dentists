import React from 'react'
import { NavLink } from "react-router-dom";
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2.jpg";

export const Carousel = () => {
  return (
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img classNameName='w-100' src={carousel1} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{background:'rgba(0, 153, 153, .6)'}}>
                        <div className="p-3" style={{maxWidth: 900}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Păstrează-ți dinții sănătoși</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Luați cel mai bun tratament dentar de calitate</h1>
                            <NavLink  to={"/paginaprogramare"}><a className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" style={{background:'rgba(0, 153, 153, .9)',border:'none'}}>Programeaza-te</a></NavLink>
                            <NavLink  to={"/desprenoi"}> <a className="btn btn-secondary py-md-3 px-md-5 animated slideInRight" style={{background:'rgba(209, 80, 0, 1)',border:'none'}}>Despre noi</a></NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img classNameName='w-100' src={carousel2} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{background:'rgba(0, 153, 153, .6)'}}>
                        <div className="p-3" style={{maxWidth: 900}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Păstrează-ți dinții sănătoși</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Luați cel mai bun tratament dentar de calitate</h1>
                            <NavLink  to={"/paginaprogramare"}><a className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" style={{background:'rgba(0, 153, 153, .9)',border:'none'}}>Programeaza-te</a></NavLink>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight" style={{background:'rgba(209, 80, 0, 1)',border:'none'}}>Despre noi</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}
