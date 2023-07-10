import React,{useState, useEffect} from 'react'
import { Layout } from '../layout/Layout'
import "./Profile.css";
import { Dashboardheader } from '../dashboardheader/Dashboardheader';
import {Form} from 'react-bootstrap';
import {Button} from "@mui/material";
import axs from "../api/axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Profile = ({ props }) => {
  
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [nume,setNume]=useState("");
  const [prenume,setPrenume]=useState("");
  const [descriere,setDescriere]=useState("");
  const [specializare,setSpecializare]=useState("");
  const [numeutilizator,setNumeutilizator]=useState("");
  const [email,setEmail]=useState("");
  const [parola,setParola]=useState("");

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

  const getImage=async()=>{
    const res=await axs.get('/getimagine/1');
    
    setImage(res.data)
  }

  const [rol,setRol]=useState("medic");

  const CreareCont=()=>
  {
    axs.post('/crearecontmedic',{
      numeutilizator:numeutilizator,
      email:email,
      parola:parola,
      imagine:imagine,
      rol:rol,
    }).then();
    // window.location.reload(false);
  }

  const addMedic=()=>
  {
    axs.post('/creare',{
      numeutilizator:numeutilizator,
      email:email,
      parola:parola,
      nume:nume,
      prenume:prenume,
      descriere:descriere,
      specializare:specializare,
      imagine:imagine,
    }).then(
      CreareCont(),
      ConfirmareAdaugare()
      );
    // window.location.reload(false);
  }

  const ConfirmareAdaugare = () => {
    toast.success("Medic adaugat",{
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

  const uploadImage = async (e) => {
      e.preventDefault();
      setFile(e.target.files[0]);
  };
  return (
    <div className='dashboard-container'>
      <Layout/>
      <div className='dashboard-body'>
        <div className='dashboard-body-content'>
        <Dashboardheader/>
        <div className='content-profile'>
          <div className='div-titlu'>
          <h1 className='titlu-adaugare'>Adaugare medic</h1>
          </div>
          <div className='body-content'>
            <div className='left-part-content'>
            <h1 className='label-text'>Nume utilizator:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setNumeutilizator(event.target.value);}}/>
              <h1 className='label-text'>Email:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setEmail(event.target.value);}}/>
              <h1 className='label-text'>Parola:</h1>
              <input type="password" className='input-label' onChange={(event)=>{setParola(event.target.value);}}/>
              <h1 className='label-text'>Nume medic:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setNume(event.target.value);}}/>
              <button className='btn-adaugare' onClick={addMedic}>Adaugare</button>
              <img src={image} alt="" />
            </div>
            <div className='right-part-content'>
            <h1 className='label-text'>Prenume medic:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setPrenume(event.target.value);}}/>
              <h1 className='label-text'>Descriere medic:</h1>
              <div style={{width:"100%", marginLeft:"20px"}}>
              <Form.Control style={{width:"70%"}} as="textarea" onChange={(event)=>{setDescriere(event.target.value);}}></Form.Control>
              </div>
            <h1 className='label-text'>Specializare medic:</h1>
              <input type="text" className='input-label' onChange={(event)=>{setSpecializare(event.target.value);}}/>
              <div className="upload">
                {/* <img src={avatar} alt="" className="img-avatar" /> */}
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
                      // alt=""
                    />
                  )}
                </div>
                <div className="upload-image">
                  <label htmlFor="" className="img-title">
                  </label>
                  {/* <input type="file" hidden onChange={uploadImage} />
                  <input type="submit" value={"UPLOAD IMAGE"} /> */}
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
                    <input type="file" hidden onChange={uploadImage} />
                  </Button>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

