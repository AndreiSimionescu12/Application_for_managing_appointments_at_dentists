import React from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import "./Program.css";

export const Program = () => {

    const customStyles={
        headRow:{
            style:{
                fontSize:'15px',
                fontWeight:'600',
                color:'#009999'
            }
        },
        headCells:{
            style:{
                fontSize:'15px',
                fontWeight:'600',
                color:'#009999'
            }
        },
        cells:{
            style:{
                fontSize:'15px',
                fontWeight:'600',
                color:'#009999'
            },
        },
    };

    const columns =[
        {
            name:"Luni",
            selector: row=>row.name
        },
        {
            name:"- - -",
            selector:row=>row.prenume
        },
        {
            name:"09:00 - 18:00",
            selector:row=>row.email
        },
    ]
    
    const options = {
        responsive: true,
        selectableRows: false,
        expandableRows: false,
        pagination: true,
      };

      
    const data=[
        {
            id:1,
            name:'Marti',
            prenume:'- - -',
            email:'09:00 - 18:00',
        },
        {
            id:2,
            name:'Miercuri',
            prenume:'- - -',
            email:'09:00 - 18:00',
        },
        {
            id:3,
            name:'Joi',
            prenume:'- - -',
            email:'09:00 - 18:00',
        },
        {
            id:5,
            name:'Vineri',
            prenume:'- - -',
            email:'09:00 - 18:00',
        },
        {
            id:6,
            name:'Sambata',
            prenume:'- - -',
            email:'Inchis',
        },
        {
            id:7,
            name:'Duminica',
            prenume:'- - -',
            email:'Inchis',
        }
    ]

  return (
    <div className='tabel'>
        <h2 style={{color:"gray", fontWeight:"bold", fontSize:12, marginBottom:10}}>DE LUNI PANA VINERI, TE PUTEM AJUTA</h2>
        <div style={{width:250 , height:30, display:"flex" , flexDirection:"row", justifyContent:"center"}}> 
        <h2 style={{fontSize:15 , fontFamily:"revert"}}>PROGRAMUL</h2> 
        <span style={{width:10}}></span>
        <h2 style={{fontSize:15, color:'#009999', fontFamily:"revert"}}>NOSTRU</h2>
        </div>
        <span style={{width:45, height:3, backgroundColor:"#009999", marginBottom:10}}></span>
       <DataTable
            data={data}
            columns={columns}
            customStyles={customStyles}
            options={options}
            >
      </DataTable>
    </div>
  )
}
