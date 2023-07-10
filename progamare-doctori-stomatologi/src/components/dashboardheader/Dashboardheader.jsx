import React,{useState, useEffect} from 'react'
import "./Dashboardheader.css";
import NotificationIcon from '../../icons/notification.svg';
import SettingsIcon from '../../icons/settings.svg';
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import axs from '../api/axios';

export const Dashboardheader = ({ btnText, onClick }) => {
  const {isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,rol,setRol} = useContext(UserContext);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  
    const getImage=async()=>{
      const res=await axs.get('/getadminimagine');
      setImagePreviewUrl(res.data)
    }

    const getImageMedic=async()=>{
      const res=await axs.get('/getmedicimagine');
      setImagePreviewUrl(res.data)
    }

    useEffect(() => {
      if(isLoggedIn)
      {
        if(rol==='medic')
        {
          getImageMedic();
        }
        else
        {
          getImage();
        }
      }
    },);
  return (
    <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }
            <h2>{'Logat ca '+rol}</h2>
            <div className='dashbord-header-right'>
                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img 
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
                    {
                      isLoggedIn ? (
                        <img
                    className='dashbord-header-avatar'
                    src={imagePreviewUrl}/>
                    
                      ):(
                        <img
                    className='dashbord-header-avatar'
                    src={imagePreviewUrl} />
                      )
                    }
            </div>
    </div>
  )
}

