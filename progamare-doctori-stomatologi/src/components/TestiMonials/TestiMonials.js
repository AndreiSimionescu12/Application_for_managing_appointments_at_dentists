import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../images/user-one.png';
import implantologie from '../../images/implantologie/implant_dentar.png';
import proteze_dentare from '../../images/proteze_dentare/coroane_dentare.jpg';
import estetica_dentara from '../../images/estetica_dentara/albire_dentara.jpg';
// import chirurgie_dentara from '../../images/chirurgie_dentara.jpg';
import './TestiMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            namedescription: 'Vezi servicii implantologie',
            description: 'Implantologie',
            address: 'USA',
            icon: implantologie,
            textdescription:'Implantologia este o ramura a stomatologiei ce utilizeaza un set de tehnici chirurgicale, vizand reabilitarea functionala a unui pacient prin reconstructia dintilor lipsa si a structurilor lor de sprijin cu substitute naturale sau sintetice.',
            link: '/serviciiimplantologie' 
        },
        {
            namedescription: 'Vezi servicii proteze dentare',
            description: 'Proteze dentare',
            address: 'USA',
            icon: proteze_dentare,
            textdescription:'Protetica este specialitatea medicinei dentare ce se ocupa cu diagnosticarea, planificarea tratamentelor, reabilitarea si intretinerea functiei orale, confortul, aspectul si starea de sanatate a pacientilor cu afectiuni clinice asociate cu lipsa sau deficitul dintilor sau cu afectiuni orale si maxilo-faciale ale tesuturilor, folosind inlocuitori compatibili.',
            link: '/serviciiprotezedentare'
        },
        {
            namedescription: 'Vezi servicii estetica dentara',
            description: 'Estetica dentara',
            address: 'USA',
            icon: estetica_dentara,
            textdescription:'Estetica dentara este domeniul din stomatologie ce se refera la orice lucrare dentara care imbunatateste aspectul estetic al unei persoane. Un zambet frumos are numeroase beneficii, atat din punct de vedere estetic (va simtiti atragator/atragatoare) cat si din punct de vedere al increderii in sine.',
            link: '/serviciiesteticadentara'
        },
        // {
        //     namedescription: 'Vezi servicii chirurgie dentara',
        //     description: 'Endodontie',
        //     address: 'USA',
        //     icon: null,
        //     textdescription:'Chirurgia dentara reprezinta o serie de proceduri medicale ce implica modificari artificiale atat la nivelul dintilor, cat si la nivelul oaselor maxilare.',
        //     link: '/endodontie'
        // },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <div className="row">
                    <div className="col-md-12" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <div className='titlu-servicii'>Serviciile noastre</div>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />
                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
    );
};

export default TestiMonials;