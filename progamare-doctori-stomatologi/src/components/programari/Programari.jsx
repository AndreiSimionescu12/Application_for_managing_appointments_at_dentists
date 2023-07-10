import React,{useState, useEffect} from 'react'
import { Layout } from "../layout/Layout"
import { Dashboardheader } from '../dashboardheader/Dashboardheader'
import { Button,Modal,Input } from 'react-bootstrap';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import axs from '../api/axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Programari = () => {
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,numeUtilizator,setNumeUtilizator, rol,setRol} = useContext(UserContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [roll,setRoll] =useState("");
  const [programari,setProgramari]=useState([])

  const selectMedic =async(email)=>
    {
      try {
        const response = await axs.post('cautarerol', {
          email,
        });
        if (response.data.success) {
          setRoll("medic");
        }
        else
        {
          try {
            const response = await axs.post('cautarerol2', {
              email,
            });
            if (response.data.success) {
              setRoll("utilizator");
            }
            else
            {
              setRoll("administrator");
            }
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    const TrimiteEmail=()=>{
      axs.post('/send-email',{
        fromEmail:"mid.dental@gmail.com",
        toEmail:"gavrilsimionescu12@gmail.com",
        subject:"Programare anulata",
        text:"Ne cerem scuze! Programarea ta a fost anulata de catre medic din motive personale!",
      }).then();
    }

  const getProgramari=()=>
    {
      axs.get('/getprogramari').then((response)=>{
        // console.log(response);
        setProgramari(response.data);
        // selectMedic(email);
      })
    }

    const filtrareDupaEmail = (email) => {
      axs.get('/getprogramari').then((response)=>{
        const rezultat = response.data.filter(item => item.numemedic === numeUtilizator);
      setProgramari(rezultat);
      
      })
    };

    useEffect(()=>{
      selectMedic(email);
    })
   
    useEffect(() => {
      if(roll==="medic")
      {
        filtrareDupaEmail(email);
      }
      else
      {
        getProgramari();
      }
    },);

    const ConfirmareStergere = () => {
      toast.success("Progamare a fost anulata!",{
        position: toast.POSITION.CENTER, // Afișează notificarea în partea de jos și pe centru
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
    

    const handleDelete =async (id)=>{
      try{
          await axs.delete("/delprogramare/"+id);
          ConfirmareStergere();
          TrimiteEmail();
      }catch(err){

      }
  }
  
  return (
    <div className='dashboard-container'>
      <Layout/>
      <div className='dashboard-body'>
        <Dashboardheader/>
        <div className='content-profile'>
            <div   className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div  class="row ">
           <div  class="col-sm-3 mt-5 mb-4 text-gred">
              {/* <div  className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                </form>
              </div>     */}
              </div>  
              <div  class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h3 style={{color:"#099999" , fontSize:"18px", fontFamily:"fantasy"}}><b>Programari</b></h3></div>
              <div  class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              {/* <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button> */}
             </div>
           </div>  
            <div  class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr style={{backgroundColor:"#099999" , color:"white"}}>
                            <th>Id</th>
                            <th>Nume utilizator </th>
                            <th>Email</th>
                            <th>Serviciu</th>
                            <th>Data</th>
                            <th>Ora</th>
                            <th>Nume medic</th>
                            <th>Actiuni</th>
                        </tr>
                    </thead>
                    <tbody>
                    {        
                        programari.map((val) => {
                        return (
                            <tr style={{color:"black", backgroundColor:"white"}}>
                            <td>{val.id}</td>
                            <td>{val.numeutilizator}</td>
                            <td>{val.email}</td>
                            <td>{val.serviciu}</td>
                            <td>{val.data}</td>
                            <td>{val.ora}</td>
                            <td style={{display:"flex", flexDirection:"row" , alignItems:"center"}}>
                              <img style={{width:"30px", height:"30px", borderRadius:"30px", marginRight:"15px"}} src={val.imaginemedic} alt="" />
                              <h1>{val.numemedic}</h1>
                              </td>
                            <td>
                               {/* <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a> */}
                                <button onClick={()=>handleDelete(val.id)}><i class="material-icons">&#xE872;</i></button>
                            </td>
                          </tr>
                          );})}
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
                </div>
                  <button type="submit" class="btn btn-success mt-4">Add Record</button>
                </form>
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       </div>
       <ToastContainer/>  
      </div>    
      </div>  
        </div>
        {/* <h2>{numeUtilizator}</h2> */}
      </div>
  )
}

