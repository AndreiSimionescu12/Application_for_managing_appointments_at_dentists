import { display, height, width } from '@mui/system';
import React from 'react'
import { Galerie } from '../galerie/Galerie'
import galerieData from '../galerieData/galerieData';
import "./Administrareservicii.css";

export const Administrareservicii = () => {
  return (
    <div className='pagina-administrare-servicii'> 
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" style={{marginTop:100}}>
              {        
              galerieData.map((val) => {
                return (
                 
                  <div style={{width:400 , height:300 }}>
                     <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={val.img} alt=""/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white" style={{marginBottom:30}}>{val.title}</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{val.description}</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div style={{width:'100%' , display:"flex", flexDirection:"column", alignItems:"center"}}>
            <button className='btn-servicii'>Editare</button>
            <button className='btn-servicii'>Stergere</button>
          </div>
                  </div>
                );
              })}
    </div>
  </div>
    </div>
  )
}

