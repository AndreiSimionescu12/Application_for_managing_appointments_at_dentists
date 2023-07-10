import React from 'react'
import "./Despre.css"
import { Navbar } from '../../components/navbar/Navbar'
import clinica from '../../images/clinica.jpg'
import clinica2 from '../../images/clinica/img2.jpg'
import clinica3 from '../../images/clinica/img3.jpg'
import { Imagegallery } from '../imagegallery/Imagegallery'
import { Program } from '../program/Program'
import { Footer } from "../footer/Footer"

export const Despre = () => {
    
  return (
    <div className='pagina-despre'>
      <div className='navbar-pagina-despre'>
        <Navbar/>
      </div>
        <div className='layout-pagina-despre'>
        <div class="about-container container-fluid" style={{marginTop:20 }}>
    <div class="container" >
       <div class="row" style={{backgroundColor:"white"}}>
           <div class="col-md-6 aboutlefft">
                <h2 style={{color:"#F2962E" , fontFamily:"sans-serif", fontWeight:"lighter" ,marginBottom:40}}>Despre noi</h2>
                <h2 style={{color:"gray"}}>Cea mai bună clinică dentară din Romania în care poți avea încredere</h2>
                <p style={{color:"gray"}}>Tot ce este mai bun pentru sanatatea dintilor tai</p>
                <ul style={{color:"gray"}}>
                    <li><i class="fa fa-check"></i> Stomatologie la cele mai inalte standarde.</li>
                    <li><i class="fa fa-check"></i> Excelenta dentara, competenta si integritate.</li>
                    <li><i class="fa fa-check"></i> Medicina dentara specializata, rezistenta garantata.</li>
                    <li><i class="fa fa-check"></i> Competenta exceptionala, blandete remarcabila.</li>
                    <li><i class="fa fa-check"></i> Excelenta in stomatologie.</li>
                </ul>
            </div>
            <div class="col-md-6 imgright">
                <img src={clinica}></img>
            </div>
       </div>
    </div>
</div> 
        </div>
        <div className='pagina2'>
            <div className='prog'>
              <Program/>
            </div>
        </div>
        <div className='pagina3' style={{marginBottom:40}}>
          <Imagegallery/>
        </div>
        <div className='pagina4'>
          <Footer/>
        </div>
    </div>
  )
}

