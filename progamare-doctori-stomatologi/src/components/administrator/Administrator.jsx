import React,{useState, useEffect} from 'react'
import { Layout } from "../layout/Layout"
import { Dashboardheader } from '../dashboardheader/Dashboardheader'
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import axs from '../api/axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Administrator = () => {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,rol,setRol} = useContext(UserContext);
  const [numeutilizator,setNumeUtilizator]=useState("");
  const [emailadmin,setEmailadmin]=useState("");
  const [parolaadmin,setParolaadmin]=useState("");
  const [id,setId]=useState("");

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

  useEffect(() => {
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);
  
  const selectMedic =async()=>
    {
        const imagine=await axs.get('/getadminimagine');
        setImagePreviewUrl(imagine.data);
        const numeutilizator=await axs.get('/getadminnume');
        setNumeUtilizator(numeutilizator.data);
        const id=await axs.get("/getadminid");
        setId(id.data);
        const email=await axs.get("/getadminemail");
        setEmailadmin(email.data);
        const parola=await axs.get("/getadminparola");
        setParolaadmin(parola.data);
        // setEmailadmin(email);
        // setParolaadmin(parola);
    }

    const ConfirmareEditare = () => {
      toast.success("Administrator actualizat",{
        position: toast.POSITION.BOTTOM_CENTER, // Afișează notificarea în partea de jos și pe centru
      autoClose: 3000, // Durata de afișare a notificării (în milisecunde)
      hideProgressBar: true, // Ascunde bara de progres
      closeOnClick: true, // Închide notificarea la clic
      pauseOnHover: false, // Nu pauza notificarea la hover
      draggable: true, // Permite tragerea notificării
      style: {
        background: '#099999', // setează culoarea de fundal la verde
        color: 'white', // setează culoarea textului la alb
        fontSize:'20px'
      },
      })
    };

    
  // useEffect(() => {
  //   if(isLoggedIn)
  //   {
  //     selectMedic();
  //   }
  // },);
  
  
  
    

  const updateAdmin = (id)=>{
    axs.put("/updateadmin",{
      numeutilizator:numeutilizator,
      email:emailadmin,
      parola:parolaadmin,
      imagine:imagine,
      id:id,
    }).then(ConfirmareEditare());
}
  

  return (
    <div className='dashboard-container'>
      <Layout/>
      <div className='dashboard-body'>
        <Dashboardheader/>
        <div className='content-profile'>
        <div className='div-titlu'>
          <h1 className='titlu-adaugare' >Editare administrator</h1>
        </div>
        <div className='body-content'>
          <div className='left-part-content'>
          <button onClick={()=>selectMedic()} style={{
                      width: "150px",
                      marginLeft:"20px",
                      marginTop:"20px",
                      height: "40px",
                      fontFamily: "Almarai",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16px",
                      borderRadius: "50px",
                      color: "#FFFFFF",
                      background: "#00C7C7",}}>incarcare date admin</button>
          <h1 className='label-text'>Nume administrator:</h1>
          <input type="text" className='input-label' value={numeutilizator} onChange={(e) => setNumeUtilizator(e.target.value)}/>
          <h1 className='label-text'>Email:</h1>
          <input type="text" className='input-label' value={emailadmin} onChange={(e) => setEmailadmin(e.target.value)}/>
          <h1 className='label-text'>Parola:</h1>
          <input type="password" className='input-label' value={parolaadmin} onChange={(e) => setParolaadmin(e.target.value)}/>
              <button onClick={()=>updateAdmin(id)} style={{
                      width: "150px",
                      marginLeft:"20px",
                      marginTop:"20px",
                      height: "40px",
                      fontFamily: "Almarai",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16px",
                      borderRadius: "50px",
                      color: "#FFFFFF",
                      background: "#00C7C7",}}>Editare</button>
          </div>
          <div className='right-part-content'>
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
                </div>
              </div>
              <ToastContainer/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

