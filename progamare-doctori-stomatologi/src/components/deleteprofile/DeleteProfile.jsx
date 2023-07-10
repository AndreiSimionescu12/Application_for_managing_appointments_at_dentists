import React,{useEffect,useState} from 'react'
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import "./DeleteProfile.css"
import {Layout} from "../layout/Layout"
import { Dashboardheader } from '../dashboardheader/Dashboardheader'
import axs from "../api/axios";
import { NavLink} from "react-router-dom";
import deleteicon from "../../icons/delete.png";
import editicon from "../../icons/edit.png";
import {Form} from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const DeleteProfile = () => {

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

    const toggleModalDetalii = () => {
      setModalOpenDetalii(!modalOpenDetalii);
  };
    
  const ConfirmareStergere = () => {
    toast.success("Medic sters",{
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

  const ConfirmareEditare = () => {
    toast.success("Medic editat",{
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

    ///

  const handleSaveProfile = () => {
    // Aici poți adăuga logica pentru salvarea datelor profilului
    console.log("Name:", nume);
    console.log("Email:", prenume);
    toggleModal();
  };

    //
    const [medici,setMedici]=useState([])
    const getMedic=()=>
    {
      axs.get('/getmedici').then((response)=>{
        console.log(response);
        setMedici(response.data);
      })
      // window.location.reload(false);
    }
    useEffect(() => {
      getMedic();
    },);

    const handleDelete =async (id)=>{
        try{
            await axs.delete("/delmedic/"+id);
            ConfirmareStergere();
        }catch(err){

        }
    }

    ///pentru update
    const selectMedic =async(id)=>
    {
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
        toggleModal();
    }

    
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

    const imagine=imagePreviewUrl;

    const updateMedic = (id)=>{
        axs.put("/update",{
          nume:nume,
          prenume:prenume,
          descriere:descriere,
          specializare:specializare,
          imagine:imagine,
          id:id,
        }).then(ConfirmareEditare());
    }

    ///
  return (
    <div className='dashboard-container'>
<Modal open={modalOpen} onClose={toggleModal}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <Typography variant="h6" component="h2">Editare profil</Typography>
    <form className='form-editare'>
      <InputLabel style={{marginTop:20 }}>Nume</InputLabel>
      <TextField  value={nume} onChange={(e) => setNume(e.target.value)} fullWidth />
      <InputLabel style={{marginTop:20}}>Prenume</InputLabel>
      <TextField  value={prenume} onChange={(e) => setPrenume(e.target.value)} fullWidth />
      <InputLabel style={{marginTop:20}}  >Descriere</InputLabel>
      <Form.Control style={{width:"70%"}} as="textarea" value={descriere} onChange={(e) => setDescriere(e.target.value)}></Form.Control>
      <InputLabel style={{marginTop:20}}>Specializare</InputLabel>
      <TextField  value={specializare} onChange={(e) => setSpecializare(e.target.value)} fullWidth />
      <div className="upload" style={{margin:0, width:"90%"}}>
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
      <Button variant="contained" color="primary" onClick={()=>updateMedic(id)} sx={{ mt: 2 }}>Salvare</Button>
      <Button variant="contained" color="secondary" onClick={toggleModal} sx={{ mt: 2 }}>Iesire</Button>
    </form>
  </Box>
</Modal>

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
      <Layout/>
      <div className='dashboard-body'>
        <div className='dashboard-body-content'>
        <Dashboardheader/>
        <div className='content-profile' style={{backgroundColor:"#e0e0e0"}}>
            <div className='container-medici'>
             {        
            medici.map((val) => {
             return (
                <div className='card' >
                <div className='box'>
                    <div className='content' >
                        <button style={{marginLeft:"220px" ,marginBottom:"4px" , width:20, height:20}} onClick={()=>handleDelete(val.id)}><img   src={deleteicon} alt="" /></button>
                        <button style={{marginLeft:"220px" , width:20, height:20}} onClick={()=>selectMedic(val.id)} ><img   src={editicon} alt="" /></button>
                        <img src={val.imagine} alt="" className='img-medic' style={{width:100, height:100}}/>
                        <h3 style={{fontSize:15}}>{val.nume+ " "+val.prenume}</h3>
                        <p style={{marginTop:"10px", height:20}}>{val.specializare}</p>
                        <button onClick={()=>vizualizare_detalii(val.id)} style={{backgroundColor:"#099999", color:"white" , height:"40px" , width:"120px" , borderRadius:"25px" , marginTop:"15px"}}>Citeste mai mult</button>
                    </div>
                </div>
              </div>
                );
              })}
            </div>
            <ToastContainer/>
        </div>
        </div>
      </div>
    </div>
  )
}

