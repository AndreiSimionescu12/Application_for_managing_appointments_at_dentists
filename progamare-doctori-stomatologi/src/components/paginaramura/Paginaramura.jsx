import React from 'react'
import "./Paginaramura.css"
import {Navbar} from "../navbar/Navbar"
import CardMedici from '../medici/CardMedici';
import { NavLink } from "react-router-dom";
import galerieData from '../galerieData/galerieData';
import { useEffect,useState } from 'react';
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import axs from '../api/axios';

export const Paginaramura = (props) => {
  const {category}=props;

  const [servicii,setServicii]=useState([])
  const getServiciu=()=>
    {
      axs.get('/getservicii').then((response)=>{
        console.log(response);
        setServicii(response.data);
      })
    }

    const [id,setId]=useState(0);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [numeserviciu,setNumeserviciu]=useState("");
    const [descriere1,setDescriere1]=useState("");
    const [descriere2,setDescriere2]=useState("");
    const [descriere3,setDescriere3]=useState("");
    const [descriere4,setDescriere4]=useState("");
    const [titlu1descriere,setTitlu1descriere]=useState("");
    const [titlu2descriere,setTitlu2descriere]=useState("");
    const [titlu3descriere,setTitlu3descriere]=useState("");
    const [titlu4descriere,setTitlu4descriere]=useState("");

    const [modalOpenDetalii,setModalOpenDetalii]=useState(false);
    const toggleModalDetalii = () => {
      setModalOpenDetalii(!modalOpenDetalii);
  };

     /// vizualizare detalii
     const vizualizare_detalii = async(id)=>{
      setId(id);
      const imagine=await axs.get('/getserviciuimagine/'+id);
      setImagePreviewUrl(imagine.data);
      const nume=await axs.get('/getserviciunume/'+id);
      setNumeserviciu(nume.data);
      const descriere1=await axs.get('/getserviciudescriere1/'+id);
      setDescriere1(descriere1.data);
      toggleModalDetalii();

      
      // const prenume=await axs.get('/getmedicprenume/'+id);
      // setPrenume(prenume.data)
      // const descriere=await axs.get('/getmedicdescriere/'+id);
      // setDescriere(descriere.data)
      // const specializare=await axs.get('/getmedicspecializare/'+id);
      // setSpecializare(specializare.data)
  }
  ///

    useEffect(() => {
      getServiciu();
    });

  const filtered=servicii.filter(data=>{
    return data.categorie === category;
  })
  return (
    <div className='servicii-ramura'>
      <Modal open={modalOpenDetalii} onClose={toggleModalDetalii}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <form className='form-editare'>
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
    <Typography variant="h6" component="h2" style={{fontSize:"17px" , marginBottom:"10px"}}>Detalii</Typography>
    <img style={{width:"100px" , borderRadius:"50%" , height:"100px"}} src={imagePreviewUrl} alt="" />
    <h1 style={{marginTop:10 , fontFamily:"-moz-initial", fontSize:"15px"}}>{numeserviciu}</h1>
    <h2 style={{marginTop:"20px" , fontSize:"15px"}}>Despre</h2>
    <h1 style={{marginTop:10}}>{descriere1}</h1>
    <p style={{marginTop:10 , color:"black"}}>{}</p>
    </div>
    <h1></h1>
    </form>
  </Box>
</Modal>
      <div className='navbar-servicii-ramura'>
      <Navbar/>
      </div>
      <div className='layout-servicii-ramura'>
        <div className='container-ramura'>
        {        
            filtered.map((val) => {
             return (
              <button onClick={()=>vizualizare_detalii(val.id)}>
                <div className='card'>
                <div className='box'>
                    <div className='content' >
                        <img src={val.imagineserviciu} alt="" className='img-medic'/>
                        <h3>{val.numeserviciu}</h3>
                        <p>{val.titluafisat}</p>
                        {/* <Navlink to={val.link}><a href="">Read more</a></Navlink> */}
                        <NavLink style={{backgroundColor:"#009999"}} to={val.link}>Citeste mai mult</NavLink>
                    </div>
                </div>
              </div>
              </button>
                );
              })}
    </div>
    </div>
      </div>
  )
}

