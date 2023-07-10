import React,{useState,useEffect} from 'react';
import "./Paginaprogramare.css";
import { Navbar } from "../navbar/Navbar";
import img_programare from "../../images/img-programare.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../calendar1/Calendar1.css";
import axs from '../api/axios';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Paginaprogramare = () => {

  const navigate=useNavigate();
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,numeUtilizator,setNumeUtilizator, rol,setRol} = useContext(UserContext);

  ///vreau sa obtin id in functie de selectie
  const[idmedic, setIdMedic]=useState();
  const[idserviciu, setIdServiciu]=useState();

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

  const [servicii,setServicii]=useState([])

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

    const getImage=async(id)=>{
      const imagine=await axs.get('/getmedicimagine/'+id);
      setImagine(imagine.data)
    }


    //pentru medic
    const [selectedMedic, setSelectedMedic] = useState('');
    const [imagine,setImagine]=useState('');

    const handleClickMedic = (value1,value2) => {
      setSelectedMedic(value1);
      setIdMedic(value2);
      getImage(value2);
    };
    //pentru serviciu
    const [selectedServiciu, setSelectedServiciu] = useState('');
  
    const handleClickServiciu = (value1,value2) => {
      setSelectedServiciu(value1);
      setIdServiciu(value2);
    };

    //// pentru calendar si intervale

    const timeIntervals = [    { label: '09:00 - 10:00', value: '09:00-10:00' },    { label: '10:00 - 11:00', value: '10:00-11:00' },    { label: '11:00 - 12:00', value: '11:00-12:00' },    { label: '12:00 - 13:00', value: '12:00-13:00' },    { label: '13:00 - 14:00', value: '13:00-14:00' },    { label: '14:00 - 15:00', value: '14:00-15:00' },    { label: '15:00 - 16:00', value: '15:00-16:00' },    { label: '16:00 - 17:00', value: '16:00-17:00' },    { label: '17:00 - 18:00', value: '17:00-18:00' },  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState(timeIntervals);
  const [appointments, setAppointments] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
    

  function handleTimeSelect(time) {
    setSelectedTime(time.value);
    setSelectedInterval(time);
    setIsPressed(true);
  }

  const ConfirmareProgramare = () => {
    toast.success("Progamare efectuata!",{
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

  const AdaugareProgramare=()=>
  {
    axs.post('/adaugareprogramare',{
      numeUtilizator:numeUtilizator,
      email:email,
      serviciu:selectedServiciu,
      data:selectedDate.toLocaleDateString(),
      ora:selectedTime,
      numemedic:selectedMedic,
      imagine:imagine,
    }).then(ConfirmareProgramare());
    // window.location.reload(false);
  }

  const[subject,setSubject]=useState("Programarea dumneavoastra");
  const[text,setText]=useState("Programarea acceptata");

  const TrimiteEmail=()=>{
    axs.post('/send-email',{
      fromEmail:"andreisimionescu2000@gmail.com",
      toEmail:"gavrilsimionescu12@gmail.com",
      subject:"Programare acceptata",
      text:"Salut Gavril Simionescu"+" te asteptam  "+selectedDate.toDateString()+" in intervalul orar  "+selectedTime,
    }).then();
  }


  /// modal
  const [modalOpenDetalii,setModalOpenDetalii]=useState(false);

  const toggleModalDetalii = () => {
    setModalOpenDetalii(!modalOpenDetalii);
};

  const SpreLogare=()=>{
    navigate("/logare");
  } 

  const SpreInregistrare=()=>{
    navigate("/inregistrare");
  } 

  
///

  function handleScheduleAppointment() {
    if(isLoggedIn)
    {
    const dateTime = `${formatDate(selectedDate)} ${selectedTime}`;
    const updatedAppointments = [...appointments, { dateTime }];
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setSelectedTime(null); // Resetați timpul selectat după programarea cu succes
    const updatedAvailableTimes = availableTimes.filter((t) => t.value !== selectedInterval.value);
    setAvailableTimes(updatedAvailableTimes);
    setSelectedInterval(null);
    ///programare
    AdaugareProgramare();
    TrimiteEmail();
    }
    else
    {
      toggleModalDetalii();
      
    }

  }

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  useEffect(() => {
    const updatedAvailableTimes = timeIntervals.filter((time) => {
      const date = formatDate(selectedDate);
      const dateTime = `${date} ${time.value}`;
      return !appointments.some((appointment) => appointment.dateTime === dateTime);
    });
    setAvailableTimes(updatedAvailableTimes);
  }, [selectedDate, appointments]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

    ///
  return (
    <div className='pagina-programare'>
      <Modal open={modalOpenDetalii} onClose={toggleModalDetalii}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <form >
      <button style={{backgroundColor:"white", color:"#099999"}} onClick={SpreLogare}>Logheaza-te</button>
      <button style={{backgroundColor:"white", color:"#099999"}} onClick={SpreInregistrare}>Inregistreaza-te</button>
    </form>
  </Box>
</Modal>
      <div className='navbar-pagina-programare'>
        <Navbar/>
      </div>
      <div className='pagina-programare-body'>
      <div className='pagina-programare-content'>
        <img  className='img_programare' src={img_programare} alt="" />
      </div>
      <div className='container-programare'>
        <div className='banner-container-programare'>
            <h5 className='titlu'>Fa o programare</h5>
        </div>
        <div className='content-container-programare'>
        <div className='choose'>
            <h3 className='titlu-doctor'>Alege un doctor</h3>
            <select className='selector-programare'>
        <option value="">Selectează o opțiune</option>
        {medici.map((option) => (
          <option
            key={option.nume}
            value={option.nume}
            onClick={() => handleClickMedic(option.nume+" "+option.prenume,option.id)}
          >
            {option.nume+" "+option.prenume}
          </option>
        ))}
      </select>
            {/* <p>Valoarea selectată: {selectedServiciu+idserviciu}</p> */}
            <h3 className='titlu-doctor'>Alege un serviciu</h3>
            <select className='selector-programare'>
        <option value="">Selectează o opțiune</option>
        {servicii.map((option) => (
          <option
            key={option.numeserviciu}
            value={option.numeserviciu}
            onClick={() => handleClickServiciu(option.numeserviciu,option.id)}
          >
            {option.numeserviciu}
          </option>
        ))}
      </select>
      <div>
    <Calendar
      minDate={new Date()}
      maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
      onChange={handleDateChange}
      value={selectedDate}
    />
    <h2 style={{marginTop:"35px"}}>Intervale disponibile:</h2>
    <div className="interval-orar">
      {availableTimes.map((time) => (
        <button  id="buton-timp" key={time.value} onClick={() => handleTimeSelect(time)} className={selectedTime === time.value ? 'selected' : ''}>{time.label}</button>
      ))}
    </div>
    {/* {selectedTime && (
      <button onClick={handleScheduleAppointment}>Schedule appointment</button>
    )} */}
    <button style={{marginTop:"20px"}} className="buton-programare" onClick={handleScheduleAppointment}>Programeaza-te</button>
    <ToastContainer/>
  </div>
            {/* <Calendar1/> */}
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

