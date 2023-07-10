import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useRef } from "react";
import "./Imagegallery.css";
import clinica2 from '../../images/clinica/img2.jpg'
import clinica3 from '../../images/clinica/img3.jpg'
import clinica from '../../images/clinica.jpg'

export const Imagegallery = () => {
    const images = [
        {  
          original: clinica,
          thumbnail: clinica,
        },
        {
          original: clinica2,
          thumbnail: clinica2,
        },
        {
          original: clinica3,
          thumbnail: clinica3,
        },
      ];
    
      const slideshowref=useRef();
    
      function playSlides(){
        slideshowref.current.play();
      }

  return (
       <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column" , alignItems:"center", justifyContent:"center"}}>
         <ImageGallery items={images}
         ref={slideshowref}
         showPlayButton={false}
         showFullscreenButton={false}
         slideInterval={1000}
         slideOnThumbnailOver={false}
         showIndex={false}
         />
      </div>
  )
}

