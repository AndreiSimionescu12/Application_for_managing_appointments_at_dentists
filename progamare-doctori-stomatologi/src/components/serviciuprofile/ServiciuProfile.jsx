import React,{useState, useEffect} from 'react'
import { Layout } from '../layout/Layout'
import { Dashboardheader } from '../dashboardheader/Dashboardheader';
import {Form} from 'react-bootstrap';
import {Button} from "@mui/material";
import axs from "../api/axios";
import Categorie from "../galerie/Categorie"
import "./ServiciuProfile.css"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const ServiciuProfile = () => {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [numeserviciu,setNumeserviciu]=useState("");
  const [imagineserviciu,setImagineserviciu]=useState("");
  const [descriere1,setDescriere1]=useState("");
  const [descriere2,setDescriere2]=useState("");
  const [descriere3,setDescriere3]=useState("");
  const [descriere4,setDescriere4]=useState("");
  const [titlu1descriere,setTitlu1descriere]=useState("");
  const [titlu2descriere,setTitlu2descriere]=useState("");
  const [titlu3descriere,setTitlu3descriere]=useState("");
  const [titlu4descriere,setTitlu4descriere]=useState("");
  const [titluafisat,setTitluafisat]=useState("");
  const [categorie,setCategorie]=useState("");


    const handleClickCategorie = (value1) => {
      setCategorie(value1);
    };

    useEffect(() => {
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  const imagine=imagePreviewUrl;

  const uploadImage = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    };

    const addServiciu=()=>
    {
        axs.post('/adaugare',{
            numeserviciu:numeserviciu,
            imagineserviciu:imagine,
            descriere1:descriere1,
            titlu1descriere:titlu1descriere,
            descriere2:descriere2,
            titlu2descriere:titlu2descriere,
            descriere3:descriere3,
            titlu3descriere:titlu3descriere,
            descriere4:descriere4,
            titlu4descriere:titlu4descriere,
            titluafisat:titluafisat,
            categorie:categorie,
        }).then(ConfirmareAdaugare());
    }

    const ConfirmareAdaugare = () => {
      toast.success("Servicu adaugat",{
        position: toast.POSITION.BOTTOM_CENTER, // Afișează notificarea în partea de jos și pe centru
      autoClose: 3000, // Durata de afișare a notificării (în milisecunde)
      hideProgressBar: true, // Ascunde bara de progres
      closeOnClick: true, // Închide notificarea la clic
      pauseOnHover: false, // Nu pauza notificarea la hover
      draggable: true, // Permite tragerea notificării
      style: {
        background: '#099999', // setează culoarea de fundal la verde
        color: 'white', // setează culoarea textului la alb
      },
      })
    };
    

  return (
    <div>
      <div className='dashboard-container'>
      <Layout/>
      <div className='dashboard-body'>
        <div className='dashboard-body-content'>
        <Dashboardheader/>
        <div className='content-profile'>
          <div className='div-titlu' style={{height:"40px"}}>
          <h1 className='titlu-adaugare'>Adaugare serviciu</h1>
          </div>
          <div className='body-content' style={{marginBottom:"30px"}}>
            <div className='left-part-content'>
              <h1 className='label-text'>Nume serviciu:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setNumeserviciu(event.target.value);}}/>
              <select className='selector-servicu'>
        <option value="">Alege categorie</option>
        {Categorie.map((option) => (
          <option
            key={option.categorie}
            value={option.categorie}
            onClick={() => handleClickCategorie(option.categorie)}
          >
            {option.categorie}
          </option>
        ))}
      </select>
              <div className="upload">
                <div className="img">
                  {loading ? (
                    <h3>Loading...</h3>
                  ) : (
                    <img
                      style={{
                        marginTop: "20px",
                        marginLeft: "20px",
                        width: "107px",
                        height: "107px",
                        borderRadius: "55.5px",
                      }}
                      src={imagePreviewUrl}
                    />
                  )}
                </div>
                <div className="upload-image">
                  <label htmlFor="" className="img-title">
                  </label>
                  <Button
                    style={{
                      width: "178px",
                      height: "48px",
                      fontFamily: "Almarai",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16px",
                      borderRadius: "50px",
                      color: "#FFFFFF",
                      background: "#00C7C7",
                    }}
                    component="label"
                    variant="contained"
                  >
                    Incarca imagine
                    <input type="file" hidden onChange={uploadImage}  />
                  </Button>
                </div>
              </div>
              <h1 className='label-text'>Titlu afisat:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setTitluafisat(event.target.value);}}/>
              <h1 className='label-text'>Titlu descriere1:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setTitlu1descriere(event.target.value);}}/>
            <h1 className='label-text'>Descriere 1:</h1>
              <Form.Control style={{width:"70%", height:"30px"}} as="textarea" onChange={(event)=>{setDescriere1(event.target.value);}}></Form.Control>
              <img src={image} alt="" />
            </div>
            <div className='right-part-content'>
              <h1 className='label-text'>Titlu descriere2:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setTitlu2descriere(event.target.value);}}/>
              <h1 className='label-text'>Descriere 2:</h1>
              <Form.Control style={{width:"70%", height:"30px"}} as="textarea" onChange={(event)=>{setDescriere2(event.target.value);}}></Form.Control>
              <h1 className='label-text'>Titlu descriere3:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setTitlu3descriere(event.target.value);}}/>
              <h1 className='label-text'>Descriere 3:</h1>
              <Form.Control style={{width:"70%", height:"30px"}} as="textarea" onChange={(event)=>{setDescriere3(event.target.value);}}></Form.Control>
              <h1 className='label-text'>Titlu descriere4:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setTitlu4descriere(event.target.value);}}/>
              <h1 className='label-text'>Descriere 4:</h1>
              <Form.Control style={{width:"70%", height:"30px"}} as="textarea" onChange={(event)=>{setDescriere4(event.target.value);}}></Form.Control>
              <button className='btn-adaugare' onClick={addServiciu}>Adaugare</button>
            </div>
            <ToastContainer/>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

