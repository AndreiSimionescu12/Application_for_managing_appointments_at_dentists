import React,{useState} from 'react'
import "./Services.css";
import { Card } from '../card/Card';
import {data} from "../data/data";
import {Sidebar} from "../sidebar/Sidebar";
import { Navbar } from '../navbar/Navbar';

export const Services = () => {
    return (
       <div className='servicii-pagina'>
         {/* <Navbar/> */}
         <Navbar/>
         <div className='layout-servicii'>
          <div className='part-right'><Card/></div>
         </div>
       </div>
    );
  };
