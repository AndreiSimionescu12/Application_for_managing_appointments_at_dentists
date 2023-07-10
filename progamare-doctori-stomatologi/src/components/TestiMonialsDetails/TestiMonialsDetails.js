import React from 'react';
import { Link } from "react-router-dom";

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {namedescription, address, description, textdescription,icon,link} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={icon} />
                <p className='nume-serviciu'>{description}</p>
                <p className='text-serviciu'>{textdescription}</p>
            </div>
            <div class="testimonial-name">
                <Link to={link} style={{textDecoration: 'none'}} ><h5 className='spre-serviciu'>{namedescription}</h5></Link>
                {/* <small>{address}</small> */}
            </div>
        </div>
    );
};

export default TestiMonialsDetails;