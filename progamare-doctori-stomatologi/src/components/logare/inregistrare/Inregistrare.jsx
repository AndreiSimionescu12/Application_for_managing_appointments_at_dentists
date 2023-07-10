import { useState } from "react";
import {Forminput} from "./Forminput";
import axs from "../../api/axios";
import {NavLink} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate} from "react-router-dom";

export const Inregistrare = () => {
  const [values, setValues] = useState({
    numeutilizator: "",
    email: "",
    parola: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "numeutilizator",
      type: "text",
      placeholder: "Nume utilizator",
      errorMessage:
        "Numele de utilizator trebuie să aibă 3-16 caractere și să nu includă niciun caracter special!",
      label: "Nume utilizator",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Ar trebui să fie o adresă de e-mail validă!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "parola",
      type: "password",
      placeholder: "Parola",
      errorMessage:
        "Parola trebuie să aibă 8-20 de caractere și să includă cel puțin 1 literă, 1 număr și 1 caracter special!",
      label: "Parola",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirma Parola",
      errorMessage: "Parolele nu se potrivesc!",
      label: "Confirma Parola",
      pattern: values.password,
      required: true,
    },
  ];

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true; // Variabila pentru a urmări validitatea tuturor câmpurilor
  
    // Verificarea fiecărui câmp în inputs
    inputs.forEach((input) => {
      if (input.required && !values[input.name]) {
        // Verifică dacă câmpul este obligatoriu și nu are valoare
        isValid = false;
        console.log(`Câmpul ${input.name} este obligatoriu.`);
      } else if (input.pattern && !new RegExp(input.pattern).test(values[input.name])) {
        // Verifică dacă valoarea câmpului nu corespunde șablonului specificat
        isValid = false;
        console.log(`Câmpul ${input.name} nu respectă șablonul.`);
      }
    });
  
    if (isValid) {
      // Toate câmpurile sunt completate corect, apelează metoda de post
      CreareCont();
    } else {
      console.log("Unul sau mai multe câmpuri nu sunt completate corect.");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [rol,setRol]=useState("utilizator");

  const ConfirmareCreare = () => {
    toast.success("Cont creat cu succes!",{
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

  const CreareCont=()=>
  {
    axs.post('/creareutilizator',{
      numeutilizator:values.numeutilizator,
      email:values.email,
      parola:values.parola,
      rol:rol,
    }).then(ConfirmareCreare(),
    navigate('/acasa')
    );
  }

  

  return (
    <div className="pagina-logare">
      <form onSubmit={handleSubmit}>
        <h1>Inregistreaza-te</h1>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            values={values}
          />
        ))}
        <div className="termeni"><input type="checkbox" id="checkbox" style={{width:"20px" , height:"20px"}}/>
        <label htmlFor="checkbox" style={{marginTop:"8px"}}>Respect termenii si conditiile</label></div>
        <button onClick={handleSubmit}>Inregistreaza-te</button>
        <div style={{display: "flex", flexDirection:"row" , alignItems:"center" , justifyContent:"center" , width:"100%" , height:"50px"}}>
          <h2 style={{width:"50%" ,  height:"100%"}}>Esti deja membru?</h2>
          <NavLink to={"/logare"}><h2 style={{width:"45%" ,  height:"100%" , color:"#099999", marginBottom:"30px"}}>Logheaza-te</h2></NavLink>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
};

