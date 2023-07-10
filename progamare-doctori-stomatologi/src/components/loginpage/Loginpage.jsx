import React from 'react'
import "./Loginpage.css";
import { Navbar } from '../navbar/Navbar';
import { Login } from '../login/Login';

export const Loginpage = () => {
  return (
    <div className='login-pagina'>
      <Navbar/>
      <div className='layout-login'>
        <Login/>
      </div>
    </div>
  )
}


