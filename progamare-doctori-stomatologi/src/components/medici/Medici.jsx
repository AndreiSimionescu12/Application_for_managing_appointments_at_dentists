import React from 'react'
import "./Medici.css";
import { useEffect, useState } from 'react';
import axs from "../api/axios";
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import { NavLink } from "react-router-dom";

export const Medici = () => {
  ///
  const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenDetalii,setModalOpenDetalii]=useState(false);
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [descriere,setDescriere]=useState("");
    const [specializare,setSpecializare]=useState("");
    const [id,setId]=useState(0);
  ////

  const toggleModalDetalii = () => {
    setModalOpenDetalii(!modalOpenDetalii);
};

  ///
  /// vizualizare detalii
  const vizualizare_detalii = async(id)=>{
    setId(id);
    const nume=await axs.get('/getmedicnume/'+id);
    setNume(nume.data)
    const prenume=await axs.get('/getmedicprenume/'+id);
    setPrenume(prenume.data)
    const descriere=await axs.get('/getmedicdescriere/'+id);
    setDescriere(descriere.data)
    const specializare=await axs.get('/getmedicspecializare/'+id);
    setSpecializare(specializare.data)
    const imagine=await axs.get('/getmedicimagine/'+id);
    setImagePreviewUrl(imagine.data)
    toggleModalDetalii();
}
///


  ///

  const [medici,setMedici]=useState([])
  const getMedic=()=>
  {
    axs.get('/getmedici').then((response)=>{
      console.log(response);
      setMedici(response.data);
    })
  }
  useEffect(() => {
    getMedic();
  },);
  return (
    <div className='medici'>
      <Modal open={modalOpenDetalii} onClose={toggleModalDetalii}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <form className='form-editare'>
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
    <Typography variant="h6" component="h2" style={{fontSize:"17px" , marginBottom:"10px"}}>Detalii</Typography>
    <img style={{width:"100px" , borderRadius:"50%" , height:"100px"}} src={imagePreviewUrl} alt="" />
    <h1 style={{marginTop:10 , fontFamily:"-moz-initial", fontSize:"15px"}}>{nume+" "+prenume}</h1>
    <h1 style={{marginTop:10}}>{specializare}</h1>
    <h2 style={{marginTop:"20px" , fontSize:"15px"}}>Despre</h2>
    <p style={{marginTop:10 , color:"black"}}>{descriere}</p>
    </div>
    <h1></h1>
    </form>
  </Box>
</Modal>
        <div className='container-medici'>
        {        
            medici.map((val, key) => {
             return (
                <div className='card'>
                <div className='box'>
                    <div className='content' >
                    <img src={val.imagine} alt="" className='img-medic' style={{width:100, height:100}}/>
                        <h3 style={{fontSize:15}}>{val.nume+ " "+val.prenume}</h3>
                        <p style={{marginTop:"10px", height:20}}>{val.specializare}</p>
                        <NavLink style={{backgroundColor:"rgb(255, 255, 255)", color:"#099999" , height:"40px" , width:"150px" , borderRadius:"25px" , marginTop:"15px"}} to={"/paginaprogramare"}>Programeaza-te</NavLink>
                        <button onClick={()=>vizualizare_detalii(val.id)} style={{backgroundColor:"#099999", color:"white" , height:"40px" , width:"120px" , borderRadius:"25px" , marginTop:"15px"}}>Citeste mai mult</button>
                    </div>
                </div>
              </div>
                );
              })}
    </div>
    </div>
  )
}

