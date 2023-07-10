import React,{useState,useEffect} from 'react'
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import "./Galerie.css";
import "../cardData/cardData";
import axs from '../api/axios';
import galerieData from '../galerieData/galerieData';
import cardData from '../cardData/cardData';
// import aditie_os from "..//..//images/aditie-os.png";
import { NavLink } from "react-router-dom";

export const Galerie = () => {

  const [servicii,setServicii]=useState([])
    const getServicii=()=>
    {
      axs.get('/getservicii').then((response)=>{
        console.log(response);
        setServicii(response.data);
      })
    }

    const [modalOpenDetalii,setModalOpenDetalii]=useState(false);
    const toggleModalDetalii = () => {
      setModalOpenDetalii(!modalOpenDetalii);
  };

    useEffect(() => {
      getServicii();
    },);

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


  return (
    <div class="flex min-h-screen items-center justify-center bg-neutral-800">
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
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" style={{marginTop:100}}>
              {        
              servicii.map((val) => {
                return (
                  <button onClick={()=>vizualizare_detalii(val.id)}>
                    <li>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={val.imagineserviciu} alt=""/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white" style={{marginBottom:30}}>{val.numeserviciu}</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{val.titluafisat}</p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
            </div>
          </div>
                  </li>
                  </button>
                );
              })}
    </div>
  </div>
  )
}

