import React,{useEffect,useState} from 'react';
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import { Layout } from '../layout/Layout'
import { Dashboardheader } from '../dashboardheader/Dashboardheader'
import { NavLink } from "react-router-dom";
import {Form} from 'react-bootstrap';
import "./Deleteserviciu.css"
import axs from "../api/axios";
import deleteicon from "../../icons/delete.png";
import editicon from "../../icons/edit.png";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Deleteserviciu = () => {

    const [id,setId]=useState(0);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [numeserviciu,setNumeserviciu]=useState("");
    const [descriere1,setDescriere1]=useState("");
    const [descriere2,setDescriere2]=useState("");
    const [descriere3,setDescriere3]=useState("");
    const [descriere4,setDescriere4]=useState("");
    const [titlu1descriere,setTitlu1descriere]=useState("");
    const [titlu2descriere,setTitlu2descriere]=useState("");
    const [titlu3descriere,setTitlu3descriere]=useState("");
    const [titlu4descriere,setTitlu4descriere]=useState("");

    const [servicii,setServicii]=useState([])

    const uploadImage = async (e) => {
      e.preventDefault();
      setFile(e.target.files[0]);
      // setImage(imagePreviewUrl);
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

    const toggleModal = () => {
      setModalOpen(!modalOpen);

  };
    const getServiciu=()=>
    {
      axs.get('/getservicii').then((response)=>{
        console.log(response);
        setServicii(response.data);
      })
    }
    useEffect(() => {
      getServiciu();
    },);

    

    const handleDelete =async (id)=>{
        try{
            await axs.delete("/delserviciu/"+id);
            ConfirmareStergere();

        }catch(err){

        }
    }

    const selectMedic =async(id)=>
    {
        setId(id);
        const numeserviciu=await axs.get('/getserviciunume/'+id);
        setNumeserviciu(numeserviciu.data)
        const imagineserviciu=await axs.get('/getserviciuimagine/'+id);
        setImagePreviewUrl(imagineserviciu.data)
        const descriere1=await axs.get('/getserviciudescriere1/'+id);
        setDescriere1(descriere1.data)
        const titlu1descriere=await axs.get('/getserviciutitlu1descriere/'+id);
        setTitlu1descriere(titlu1descriere.data)
        const descriere2=await axs.get('/getserviciudescriere2/'+id);
        setDescriere2(descriere2.data)
        const titlu2descriere=await axs.get('/getserviciutitlu2descriere/'+id);
        setTitlu2descriere(titlu2descriere.data)
        const descriere3=await axs.get('/getserviciudescriere3/'+id);
        setDescriere3(descriere3.data)
        const titlu3descriere=await axs.get('/getserviciutitlu3descriere/'+id);
        setTitlu3descriere(titlu3descriere.data)
        const descriere4=await axs.get('/getserviciudescriere4/'+id);
        setDescriere4(descriere4.data)
        const titlu4descriere=await axs.get('/getserviciutitlu4descriere/'+id);
        setTitlu4descriere(titlu4descriere.data)
        // const imagine=await axs.get('/getmedicimagine/'+id);
        // setImagePreviewUrl(imagine.data)
        toggleModal();
    }

    const imagine=imagePreviewUrl;

    const updateServiciu = (id)=>{
      axs.put("/updateserviciu",{
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
        id:id,
      }).then( ConfirmareEditare());
     
    }

   

  const ConfirmareStergere = () => {
    toast.success("Serviciu sters",{
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

  const ConfirmareEditare = () => {
    toast.success("Serviciu editat",{
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
  return (
    <div className='dashboard-container'>
      <Modal open={modalOpen} onClose={toggleModal}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <Typography variant="h6" component="h2" style={{marginBottom:"30px"}}>Editare serviciu</Typography>
    <div style={{display:'flex', flexDirection:'row'}}>
    <form className='form-editare' style={{marginRight:"40px"}}>
      <TextField label="Nume" value={numeserviciu} onChange={(e) => setNumeserviciu(e.target.value)} fullWidth style={{marginBottom:"20px"}}/>
      <div className="upload" style={{margin:0, width:"90%", marginBottom:"30px"}}>
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
      <TextField label="Titlu1" value={titlu1descriere} onChange={(e) => setTitlu1descriere(e.target.value)} fullWidth style={{marginBottom:"30px"}}/>
      <InputLabel htmlFor="my-input">Descriere1</InputLabel>
      <Form.Control value={descriere1} onChange={(e) => setDescriere1(e.target.value)} placeholder='Descriere1' style={{width:"100%" , height:"20px", marginBottom:"30px" , marginLeft:"0px"}} as="textarea" ></Form.Control>
      <Button style={{marginBottom:"20px"}} variant="contained" color="primary" onClick={()=>updateServiciu(id)}>Salvare</Button>
      <Button variant="contained" color="secondary" >Iesire</Button>
    </form>
    <form className='form-editare'>
    <TextField label="Titlu2" value={titlu2descriere} onChange={(e) => setTitlu2descriere(e.target.value)} fullWidth style={{marginBottom:"30px"}}/>
    <InputLabel htmlFor="my-input">Descriere2</InputLabel>
      <Form.Control value={descriere2} onChange={(e) => setDescriere2(e.target.value)} placeholder='Descriere2' style={{width:"80%" , height:"20px", marginBottom:"30px", marginLeft:"0px"}} as="textarea" ></Form.Control>
      <TextField label="Titlu3" value={titlu3descriere} onChange={(e) => setTitlu3descriere(e.target.value)} fullWidth style={{marginBottom:"30px", width:"320px"}}/>
      <InputLabel htmlFor="my-input">Descriere3</InputLabel>
      <Form.Control value={descriere3} onChange={(e) => setDescriere3(e.target.value)} placeholder='Descriere3' style={{width:"100%" , height:"20px", marginBottom:"30px" , marginLeft:"0px"}} as="textarea" ></Form.Control>
      <TextField label="Titlu4" value={titlu4descriere} onChange={(e) => setTitlu4descriere(e.target.value)} fullWidth style={{marginBottom:"30px"}}/>
      <InputLabel htmlFor="my-input">Descriere4</InputLabel>
      <Form.Control value={descriere4} onChange={(e) => setDescriere4(e.target.value)} placeholder='Descriere4' style={{width:"100%" , height:"20px", marginBottom:"30px" , marginLeft:"0px"}} as="textarea" ></Form.Control>
      
    </form>
    </div>
  </Box>
</Modal>
      <Layout/>
      <div className='dashboard-body' style={{backgroundColor:"#ffff"}}>
      <div className='dashboard-body-content'>
      <Dashboardheader/>
      <div className='content-profile'>
      <div class="flex min-h-screen items-center justify-center " >
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" style={{marginTop:100}}>
              {        
              servicii.map((val) => {
                return (
                    <div > 
                    <button style={{marginLeft:"220px" , width:20, height:20}} onClick={()=>handleDelete(val.id)}><img   src={deleteicon} alt="" /></button>
                        <button style={{marginLeft:"220px" , width:20, height:20}} onClick={()=>selectMedic(val.id)}><img   src={editicon} alt="" /></button>
                        <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={val.link} activeClassName="selected">
                        <li>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={val.imagineserviciu} alt=""/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white" style={{marginBottom:30}}>{val.titlu1descriere}</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{val.descriere1}</p>
            </div>
          </div>
                  </li>
                  </NavLink>
                  </div>
                );
              })}
              <ToastContainer/>
    </div>
  </div>
      </div>
      </div>
      </div>
    </div>
  )
}
