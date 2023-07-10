import "./Navbar.css";
import React,{useState , useContext} from 'react'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import { NavLink } from "react-router-dom";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../../src/contexts/userContext";

export const Navbar = () => {

  const [toggle, setToggle]=useState(false);
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,numeUtilizator,setNumeUtilizator,rol,setRol} = useContext(UserContext)

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'>Mid Dental</h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
        </div>
        <ul className='links'>
        <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/acasa"} activeClassName="selected"><li>Acasa</li></NavLink>
          <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/medici"} activeClassName="selected"><li>Medici</li></NavLink>
          <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/desprenoi"} activeClassName="selected"><li>Despre</li></NavLink>
          <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/servicii"} activeClassName="selected"><li>Servicii</li></NavLink>
          {/* <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/contact"} activeClassName="selected"><li>Contact</li></NavLink> */}
          {isLoggedIn && (rol === 'medic' || rol === 'administrator') && <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/dashboardprogramari"} activeClassName="selected"><li>Dashboard</li></NavLink>}
          <NavLink style={{color:'inherit',textDecoration:'inherit'}} to={"/logare"} activeClassName="selected"><li>Logare</li></NavLink>
        </ul>
    </nav>
  )
}
