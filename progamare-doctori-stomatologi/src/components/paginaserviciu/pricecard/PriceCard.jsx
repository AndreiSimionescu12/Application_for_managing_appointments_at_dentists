import React from 'react'
import { PriceCardData } from './PriceCardData';
import "./PriceCard.css"

export const PriceCard = (props) => {
  const {data,category}=props;
  const filtered=data.filter(data=>{
    return data.category === category;
  })

  return (
    <div className='container-pret-serviciu'>
    {        
        filtered.map((val) => {
         return (
                <div className='card'>
            <div className='box'>
                <div className='content' >
                    <img src={val.img} alt="" className='img-serviciu'/>
                    <h3>{val.title}</h3>
                    {/* <div className='descriere-serviciu'>asdad</div> */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',width:'100%', marginTop:20}}>{val.description}</div>
                    <div style={{color:'black', fontWeight:'bold' ,fontSize:'1em'}}>Pret</div>
                    <div style={{color:'black', fontWeight:'bold' ,fontSize:'1em'}}>4000 lei</div>
                    <a href="">Programeaza-te</a>
                </div>
            </div>
          </div>
              
            );
          })}
</div>

  )
}

