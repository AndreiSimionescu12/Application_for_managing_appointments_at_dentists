import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import SideBarItem from './sidebar-item';
import './Sidebar.css';
import logo from '../../icons/icon_clinica.png';
import logout from '../../icons/logout.svg'
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";

function SideBar ({ menu }) {
    const location = useLocation();
    const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,rol,setRol} = useContext(UserContext);
    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img
                        src={logo}
                        alt="logo" />
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>
                    <NavLink to={"/logare"}>
                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={logout}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;