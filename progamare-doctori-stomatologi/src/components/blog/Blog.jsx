import React from 'react'
import "./Blog.css";
import blog from "../../images/blog.jpg";


export const Blog = () => {
  return (
    <div class="about-container container-fluid" style={{marginTop:150}}>
    <div class="container">
       <div class="row">
           <div class="col-md-6 aboutlefft">
                <h2>Noi oferim tratamente din partea celor mai experimentati medici</h2>
                <p>Tot ce este mai bun pentru sanatatea dintilor tai</p>
                <ul>
                    <li><i class="fa fa-check"></i> Stomatologie la cele mai inalte standarde.</li>
                    <li><i class="fa fa-check"></i> Excelenta dentara, competenta si integritate.</li>
                    <li><i class="fa fa-check"></i> Medicina dentara specializata, rezistenta garantata.</li>
                    <li><i class="fa fa-check"></i> Competenta exceptionala, blandete remarcabila.</li>
                    <li><i class="fa fa-check"></i> Excelenta in stomatologie.</li>
                </ul>
            </div>
            <div class="col-md-6 imgright">
                <img src={blog}></img>
            </div>
       </div>
    </div>
</div> 
  )
}


