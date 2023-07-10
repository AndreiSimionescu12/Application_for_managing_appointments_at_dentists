import React from 'react';
import SideBar from "../sidebar/Sidebar";
import sidebar_menu from "../sidebar/Sidebarmenu";
import sidebar_menu2 from "../sidebar/Sidebarmenu2";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import "./Layout.css";

export const Layout = () => {
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,rol,setRol} = useContext(UserContext);
  return (
    <div>
      
        <SideBar menu={rol==='medic'? sidebar_menu2:sidebar_menu} />
    </div>
  )
}

