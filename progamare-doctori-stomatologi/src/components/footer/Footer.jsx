import React from 'react'
import "./Footer.css";
import arrow from "../../icons/arrow.svg";
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <div class="main-footer">
    <div class="inner-footer">
        <h2>Optiuni rapide</h2>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/acasa"}><a>Acasa</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/medici"}><a>Medici</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/despre"}><a>Despre</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/servicii"}><a>Servicii</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/contact"}><a>Contact</a></NavLink></div>
    </div>

    <div class="inner-footer">
        <h2>Servicii</h2>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/servicii"}><a>Toate serviciile</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/serviciiimplantologie"}><a>Implantologie</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/serviciiprotezedentare"}><a>Proteze dentare</a></NavLink></div>
        <div className='div-icon'><img src={arrow} style={{backgroundColor:"white"}} alt="" /> <NavLink to={"/serviciiesteticadentara"}><a>Estetica dentara</a></NavLink></div>
    </div>
    <div class="inner-footer">
        <h2>Program</h2>
        <h1>Luni - Vineri : 10:00 - 18:00 </h1>
        <h1>Sambata : 10:00 - 14:00 </h1>
        <h1>Duminica : inchis</h1>
    </div>
    <div class="inner-footer">
        <h2>E-mail</h2>
        <h1>gavril.simionescu@student.usv.ro</h1>
        <h2>Telefon</h2>
        <h1>0755526038</h1>
    </div>
</div>
  )
}


