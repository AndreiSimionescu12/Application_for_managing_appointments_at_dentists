import Column from 'antd/es/table/Column';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import "./Listaadministratori.css";
import { Navbar } from '../../components/navbar/Navbar';
import axs from '../api/axios';

export const Listaadministratori = () => {
    const customStyles={
        headRow:{
            style:{
                backgroundColor:'#099999',
                color:'white'
            }
        },
        headCells:{
            style:{
                fontSize:'16px',
                fontWeight:'600',
                textTransform:'uppercase',
            }
        },
        cells:{
            style:{
                fontSize:'15px',
            },
        },
    };
    

    const columns =[
        {
            name:"Nume utilizator",
            selector: row=>row.numeutilizator
        },
        {
            name:"Email",
            selector:row=>row.email
        },
        {
            name:"Parola",
            selector:row=>'********'
        },
    ]

   
    const [utilizatori,setUtilizatori]=useState([])
    const getUtilizatori=()=>
    {
      axs.get('/getutilizatori').then((response)=>{
        console.log(response);
        setUtilizatori(response.data);
      })
    }
    useEffect(() => {
        getUtilizatori();
    },);

  return (
        <div className='layout-admini'>
            <DataTable
            columns={columns}
            data={utilizatori}
            customStyles={customStyles}
            >
      </DataTable>
        </div>
  )
}

