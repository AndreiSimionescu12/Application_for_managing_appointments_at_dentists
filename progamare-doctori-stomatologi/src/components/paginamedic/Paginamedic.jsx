import React, {useState} from 'react'
import "./Paginamedic.css";
import {Navbar} from "../navbar/Navbar";
import { DataPaginaMedic } from './DataPaginaMedic';

export const Paginamedic = (props) => {
        return (
            <div className='pagina-medic'>
                <div className='navbar-medic-pagina'>
                    <Navbar/>
                </div>
                <div className='layout-pagina-medic'>
                <div class="about-container container-fluid" style={{marginTop:100, backgroundColor:"#009999"}}>
                        <div class="container" style={{backgroundColor:"#009999"}}>
               <div class="row" style={{backgroundColor:"#009999"}}>
                   <div class="col-md-6 aboutlefft">
                        <div>{props.description}</div>
                    </div>
                    <div class="col-md-6 imgright">
                        <img src={props.img}></img>
                        <h1>{props.title}</h1>
                        <button className='buton-programare'>Programeaza-te</button>
                    </div>
               </div>
            </div>
        </div>
                </div>
            </div>
          )
        }
    
    
  

