import axios from 'axios';

import {Home} from "./components/home/Home";
import {BrowserRouter, Routes, Route, json} from "react-router-dom";
import {Services} from "./components/services/Services";
import { Loginpage } from './components/loginpage/Loginpage';
import {Administrareservicii} from "./components/administrareservicii/Administrareservicii";
import { Paginamedic } from "./components/paginamedic/Paginamedic";
import { DataPaginaMedic } from "./components/paginamedic/DataPaginaMedic";
import { Paginaramura } from "./components/paginaramura/Paginaramura";
import { Paginamedici } from "./components/paginamedici/Paginamedici";
import galerieData from "./components/galerieData/galerieData";
import { Despre } from "./components/despre/Despre";
import { PaginaServiciu } from "./components/paginaserviciu/PaginaServiciu";
import { PaginaServiciuData } from "./components/paginaserviciu/PaginaServiciuData";
import { Paginaprogramare } from "./components/paginaprogramare/Paginaprogramare";
import {Profile} from "./components/profile/Profile";
import {DeleteProfile}  from './components/deleteprofile/DeleteProfile';
import { ServiciuProfile } from './components/serviciuprofile/ServiciuProfile';
import {Deleteserviciu} from './components/deleteserviciu/Deleteserviciu';
import { Inregistrare } from './components/logare/inregistrare/Inregistrare';
import { Utilizatori } from './components/utilizatori/Utilizatori';
import { Logare } from './components/logare/inregistrare/Logare';
import { Administrator } from "./components/administrator/Administrator";
import { Programari } from './components/programari/Programari';
import axs from './components/api/axios';

function App() {
  axios.defaults.withCredentials = false;
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/serviciiimplantologie" element={<Paginaramura category={"implantologie"}/>}/>
         <Route path="/serviciiprotezedentare" element={<Paginaramura category={"proteze dentare"}/>}/>
         <Route path="/serviciiesteticadentara" element={<Paginaramura category={"estetica dentara"}/>}/>
         <Route path="/medici" element={<Paginamedici/>}/>
         <Route path="/servicii" element={<Services/>}/>
         <Route path="/acasa" element={<Home/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path="/dashboardprogramari" element={<Programari/>}/>
         <Route path="/paginaprogramare" element={<Paginaprogramare/>}/>
         <Route path="/inregistrare" element={<Inregistrare/>}/>
         <Route path="/logare" element={<Logare/>}/>
         <Route path="/dashboardadministratori" element={<Administrator/>}/>
         <Route path='/dashboardutilizatori' element={<Utilizatori/>}/>
         <Route path="/dashboardservicii" element={<ServiciuProfile/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/deletemedic" element={<DeleteProfile/>}/>
         <Route path="/deleteserviciu" element={<Deleteserviciu/>}/>
         <Route path="/c" element={<Paginaprogramare/>}/>
         <Route path="/logare" element={<Loginpage/>}/>
         <Route path="/admini" element={<Administrareservicii/>}/>
         <Route path="/desprenoi" element={<Despre/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
