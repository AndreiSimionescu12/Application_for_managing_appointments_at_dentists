import React,{useState,useEffect} from 'react';
import "./Card.css";
import axs from '../api/axios';
import { Button, Modal, Box, Typography, TextField, InputLabel } from '@mui/material';


 export  const Card = ({ img, title, description }) => {
  // const [showMore, setShowMore] = useState(false);
  //       const handleShowMore = () => {
  //         setShowMore(!showMore);
  //       };
        
  //       const [products, setProducts] = useState(galerieData);
  //       const filterCategory = (categoryItem) => {
  //       const result = galerieData.filter((currentCategory) => {
  //       return currentCategory.category === categoryItem;
  //       });
  //       setProducts(result);
  //       }
  const [modalOpenDetalii,setModalOpenDetalii]=useState(false);
    const toggleModalDetalii = () => {
      setModalOpenDetalii(!modalOpenDetalii);
  };
  const [id,setId]=useState(0);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [numeserviciu,setNumeserviciu]=useState("");
    const [descriere1,setDescriere1]=useState("");
  const [servicii,setServicii]=useState([])
  const getServiciu=()=>
    {
      axs.get('/getservicii').then((response)=>{
        console.log(response);
        setServicii(response.data);
      })
    }

        // const filterCategory = (categoryItem) => {
        // const result = servicii.filter((currentCategory) => {
        // return currentCategory.categorie === categoryItem;
        // });
        // setServicii(result);
        // }
      
     /// vizualizare detalii
     const vizualizare_detalii = async(id)=>{
      setId(id);
      const imagine=await axs.get('/getserviciuimagine/'+id);
      setImagePreviewUrl(imagine.data);
      const nume=await axs.get('/getserviciunume/'+id);
      setNumeserviciu(nume.data);
      const descriere1=await axs.get('/getserviciudescriere1/'+id);
      setDescriere1(descriere1.data);
      toggleModalDetalii();

      
      // const prenume=await axs.get('/getmedicprenume/'+id);
      // setPrenume(prenume.data)
      // const descriere=await axs.get('/getmedicdescriere/'+id);
      // setDescriere(descriere.data)
      // const specializare=await axs.get('/getmedicspecializare/'+id);
      // setSpecializare(specializare.data)
  }
  ///
  

    useEffect(() => {
      getServiciu();
    },);
        return (
          <div className='afisare-carduri'>
            <Modal open={modalOpenDetalii} onClose={toggleModalDetalii}>
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <form className='form-editare'>
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
    <Typography variant="h6" component="h2" style={{fontSize:"17px" , marginBottom:"10px"}}>Detalii</Typography>
    <img style={{width:"100px" , borderRadius:"50%" , height:"100px"}} src={imagePreviewUrl} alt="" />
    <h1 style={{marginTop:10 , fontFamily:"-moz-initial", fontSize:"15px"}}>{numeserviciu}</h1>
    <h2 style={{marginTop:"20px" , fontSize:"15px"}}>Despre</h2>
    <h1 style={{marginTop:10}}>{descriere1}</h1>
    <p style={{marginTop:10 , color:"black"}}>{}</p>
    </div>
    <h1></h1>
    </form>
  </Box>
</Modal>
            <div className='card-list'>
            <div class="container">
            <div className='div-filter'>
                        {/* <button className='button-filter' onClick={() => setServicii(servicii)}>All</button>
                        <button className='button-filter' onClick={() => filterCategory('implantologie')}>Implantologie</button>
                        <button className='button-filter' onClick={() => filterCategory('proteze dentare')}>Proteze dentare</button>
                        <button className='button-filter' onClick={() => filterCategory('estetica dentara')}>Estetica dentara</button> */}
            </div>
    <div class="box-container">
            {        
              servicii.map((val) => {
                return (
                  <div class="box">
                  <img src={val.imagineserviciu} alt="" />
                  <h3 style={{color:"gray" , fontSize:"15px"}}>{val.numeserviciu}</h3>
                  <p style={{fontSize:"13px"}}>{val.titluafisat}</p>
                  <button style={{backgroundColor:"#099999" , width:"120px" , height:"35px" , color:"white" , marginTop:"10px" , fontSize:"15px", borderRadius:"15px"}} onClick={()=>vizualizare_detalii(val.id)}>Citeste mai mult</button>
              </div>
                );
              })
            }                           
    </div>
</div>
          </div>
          </div>
        );
      };
export default Card
