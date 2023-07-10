import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import './Sidebar.css';

const SideBarItem = ({ item, active }) => {
    const [hover, setHover] = useState(false);
    const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,rol,setRol} = useContext(UserContext);
    return (
        <Link 
            to={item.path} 
            className={active ? 'sidebar-item-active' : 'sidebar-item'} >
                <img 
                    src={item.icon}
                    alt={`icon-${item.icon}`}
                    className='sidebar-item-icon' />
                <span className='sidebar-item-label'>{item.title}</span>
        </Link>
    )
}
export default SideBarItem;
