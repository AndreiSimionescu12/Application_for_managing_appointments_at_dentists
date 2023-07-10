import { useState,useEffect ,createContext, useContext} from "react";
import {Forminput} from "./Forminput";
import axs from "../../api/axios";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import {NavLink} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Logare = () => {

  const [message, setMessage] = useState('');
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,numeUtilizator,setNumeUtilizator,rol,setRol} = useContext(UserContext)
 
  const navigate2 = useNavigate();
  const navigate=useNavigate();

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setParola(event.target.value);
  };

  const handleNumeUtilizatorChange = (event) => {
    setNumeUtilizator(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axs.post('login', {
        numeUtilizator,
        email,
        parola,
      });
      if (response.data.success) {
        setIsLoggedIn(true);
        ConfirmareLogare();
        selectMedic(email);
        navigate("/paginaprogramare");
      }
      else
      {
        LogareFaraSucces();
      }

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Eroare la autentificare');
    }
  };

  const selectMedic =async(email)=>
    {
      try {
        const response = await axs.post('cautarerol', {
          email,
        });
        if (response.data.success) {
          setRol("medic");
        }
        else
        {
          try {
            const response = await axs.post('cautarerol3', {
              email,
            });
            if (response.data.success) {
              setRol("administrator");
            }
            else
            {
              setRol("utilizator");
            }
          } catch (error) {
            console.error(error);
          }
          // setRol("administrator");
        }
      } catch (error) {
        console.error(error);
      }
    }

  const ConfirmareLogare = () => {
    toast.success("Logare cu succes!",{
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

  const LogareFaraSucces = () => {
    toast.success("Date de logare incorecte",{
      position: toast.POSITION.BOTTOM_CENTER, // Afișează notificarea în partea de jos și pe centru
    autoClose: 3000, // Durata de afișare a notificării (în milisecunde)
    hideProgressBar: true, // Ascunde bara de progres
    closeOnClick: true, // Închide notificarea la clic
    pauseOnHover: false, // Nu pauza notificarea la hover
    draggable: true, // Permite tragerea notificării
    style: {
      background: '#099999', // setează culoarea de fundal la verde
      color: 'white', // setează culoarea textului la alb
      fontSize:'20px',
      width:"300px"
    },
    })
  };

  return (
    
    <div className="pagina-logare">
    <form onSubmit={handleSubmit}>
      <div className="formInput">
      <h1>Logare</h1>
      <label htmlFor="">Nume utilizator:</label>
      <input type="text" value={numeUtilizator} onChange={handleNumeUtilizatorChange} placeholder="Nume de utilizator" />
      <label htmlFor="">Email:</label>
      <input type="text" value={email} onChange={handleUsernameChange} placeholder="Email" />
      <label htmlFor="">Parola:</label>
      <input type="password" value={parola} onChange={handlePasswordChange} placeholder="Parolă" />
      <button>Logare</button>
      <div style={{display: "flex", flexDirection:"row" , alignItems:"center" , justifyContent:"center" , width:"100%" , height:"50px"}}>
          <h2 style={{width:"35%" ,  height:"100%"}}>Nu ai cont?</h2>
          <NavLink to={"/inregistrare"}><h2 style={{width:"55%" ,  height:"100%" , color:"#099999", marginBottom:"30px"}}>Inregistreaza-te</h2></NavLink>
        </div>
        <ToastContainer/>
      </div>
    </form>
  </div>
  );
};

