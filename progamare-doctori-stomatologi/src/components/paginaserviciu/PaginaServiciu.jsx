import React from 'react'
import './PaginaServiciu.css';
import {Navbar} from '../navbar/Navbar'
import { Divider } from 'antd';
import { ProgressCircleBar } from './progresscirclebar/ProgressCircleBar';
import { PriceCard } from './pricecard/PriceCard'
import { PriceCardData } from './pricecard/PriceCardData';

export const PaginaServiciu = (props) => {
  const {category}=props;
  return (
    <div className="pagina-serviciu">
      <div className='nav'>
      <Navbar/>
      </div>
      <div className='content-serviciu'>
        <div className='div-title'>
        <h1 className='title-serviciu'>{props.title}</h1>
        </div>
        <div className='div-subtitle'>
        <h2 className='subtitle-serviciu'>{props.subtitle}</h2>
        </div>
        <Divider style={{margin:0}}/>
        <div className='prog'><ProgressCircleBar/></div>
         <div className='div-content'>{props.description}</div>
        <PriceCard data={PriceCardData} category={category}/>
      </div>
    </div>
  )
}

