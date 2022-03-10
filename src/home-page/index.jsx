import React, { useState } from 'react'
import './home-page.css'
import BtnSlider from './BtnSlider.js'
import Menu from "../menu";
import { Link } from "react-router-dom";
import image1 from './images/ALEXA.jpg';
import image2 from './images/mickey.jpeg';
import image3 from './images/playground.jpeg';
import image4 from './images/birthday-cake.gif';
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail }  from 'react-icons/gr';


const itemData = [
    {
        id: 1,
        img: image1,
        title: 'Bine ai venit la Tup Tup House!',
    },
    {
        id: 2,
        img: image2,
        title: 'Petreceri tematice',
        title2: 'Costumatii personaje Disney pt copii',
        title3: 'Fotografie de grup'
    },
    {
        id: 3,
        img: image3,
        title: '',
    },
    {
        id: 4,
        img: image4,
        title: 'image4',
    },
];

export default function HomePage() {

    const [slideIndex, setSlideIndex] = useState(1)

    // function for the next slide
    const nextSlide = () => {
        if (slideIndex !== itemData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === itemData.length) {
            setSlideIndex(1)
        }
    }

    // function for the previous slide
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(itemData.length)
        }
    }

    // useEffect(() => {
    //     document.body.style.background = "red";
    //   });

    return (
        <div className='home-page__main-container'>
            <div>
                <Menu />
            </div>
            <div className="home-page__title">
                <div>  Țup Țup <span className='ceva'>House</span> </div>
            </div>
            <div className="container-slider">
                {itemData.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            style={{ 'backgroundImage': `url(${item.img})` }}
                        >
                            {slideIndex === 1 ? <span className='span1'>
                                <Link to='/promo-pack' className="home-page__promo-pack">Pachet Promotional</Link>
                            </span> : null}
                            {slideIndex === 2 ? <div className='span2'>
                                <div id='little_div'>{item.title}</div>
                                <div id='little_div'>{item.title2}</div>
                                <div id='little_div'>{item.title3}</div>
                            </div> : null}

                            {/* <img
                                src={`${item.img}`}
                                alt="img"
                            /> */}
                        </div>
                    )
                })}

                {/* buttons for next/ previous slide */}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            </div>
            <div className='home-page__info-div'>
                {/*  -------------- adresa -------------- */}
                <div className='home-page__info-div-set'>
                    <div className='info-div__info-div-title'> ADRESA </div>
                    <div className='home-page__info'>
                        <span className='home-page__span1'> <ImLocation/> Adresa: </span> <span className='home-page__span2'>Pitesti</span>
                    </div>
                    <div className='home-page__info'>
                        <span className='home-page__span1'> <AiFillPhone/> Telefon: </span> <span className='home-page__span2'>nr telefon</span>
                    </div>
                    <div className='home-page__info'>
                        <span className='home-page__span1'><GrMail/> Email: </span> <span className='home-page__span2'>mail</span>
                    </div>
                </div>

                {/*  -------------- retele de socializare -------------- */}
                <div className='home-page__info-div-set'>
                    <div className='info-div__info-div-title2'> Hai sa socializam! </div>
                    <div className='home-page__info2'>
                        <span className='home-page__span2'><ImFacebook2/> <a href="https://www.facebook.com/TuTupHouse" target="_blank" rel="noreferrer" >Facebook</a></span>
                    </div>
                    <div className='home-page__info2'>
                        <span className='home-page__span2'><GrInstagram/> <a href="https://www.instagram.com/tuptuphouse/" target="_blank" rel="noreferrer">Instagram</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}