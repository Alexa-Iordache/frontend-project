// import React from "react";
// import "./home-page.css";
// import { Link } from "react-router-dom";
// import Menu from "../menu";


// class HomePage extends React.Component {
//     render() {
//         return (
//             <div className="home-page__main-container">
//                 <Menu />
//                 <div className="home-page__title">
//                     <div>  Țup Țup </div>
//                     <div className="ceva"> House </div>
//                 </div>
//                 <Link to='/promo-pack' className="home-page__promo-pack">Pachet Promotional</Link>
//             </div>
//         );
//     }
// }

// export default HomePage;

import React, { useState } from 'react'
import './home-page.css'
import BtnSlider from './BtnSlider.js'
import Menu from "../menu";
import image1 from './images/children2.jpeg';
import image2 from './images/bunny3.png';
import image3 from './images/mickey.jpeg';
import image4 from './images/playground.jpeg';
import image5 from './images/birthday-cake.gif';


const itemData = [
    {
        id: 1,
        img: image1,
        title: '',
    },
    {
        id: 2,
        img: image2,
        title: 'Bine ai venit la Tup Tup House!',
    },
    {
        id: 3,
        img: image3,
        title: 'Petreceri tematice',
        title2: 'Costumatii personaje disney pt copii',
        title3: 'Fotografie de grup'
    },
    {
        id: 4,
        img: image4,
        title: 'image4',
    },
    {
        id: 5,
        img: image5,
        title: 'image5',
    },
];

export default function Slider() {

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

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    return (
        <div>
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
                            style={{ 'backgroundImage': `url(${item.img})`}}
                        >
                            {slideIndex === 2 ? <span className='span2'>{item.title}</span> : null}
                            {slideIndex === 3 ? <div className='span3'>
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


                {/* <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
            </div>
        </div>
    )
}