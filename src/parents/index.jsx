import React, { useState } from "react";
import "./parents.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ImageList, ImageListItem } from "@mui/material";
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { ImArrowRight2 } from 'react-icons/im';
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.jpeg";
import image7 from "./images/image7.jpeg";
import image8 from "./images/image8.jpeg";
import image9 from "./images/image9.jpeg";
import image10 from "./images/image10.jpeg";
import image11 from "./images/image11.jpeg";
import image12 from "./images/image12.jpeg";
import image13 from "./images/image13.jpeg";
import image14 from "./images/image14.jpeg";
import image15 from "./images/image15.jpeg";
import image16 from "./images/image16.jpeg";
import image17 from "./images/image17.jpeg";


const itemData = [
    {
        img: image1,
        title: 'image1',
    },
    {
        img: image2,
        title: 'image2',
    },
    {
        img: image3,
        title: 'image3',
    },
    {
        img: image4,
        title: 'image4',
    },
    {
        img: image5,
        title: 'image5',
    },
    {
        img: image6,
        title: 'image6',
    },
    {
        img: image7,
        title: 'image7',
    },
    {
        img: image8,
        title: 'image8',
    },
    {
        img: image9,
        title: 'image9',
    },
    {
        img: image10,
        title: 'image10',
    },
    {
        img: image11,
        title: 'image11',
    },
    {
        img: image12,
        title: 'image12',
    },
    {
        img: image13,
        title: 'image13',
    },
    {
        img: image14,
        title: 'image14',
    },
    {
        img: image15,
        title: 'image15',
    }, 
    {
        img: image16,
        title: 'image16',
    },
    {
        img: image17,
        title: 'image17',
    },
];

function Parents() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const styleModal2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        // bgcolor: 'rgb(248, 246, 241)',
        bgcolor: '#FFE5CC',
        border: '2px solid #000',
        boxShadow: 24,
        padding: 4,
        fontSize: 'large',
        textAlign: 'center',
    }

    return (
        <div className="parents__main-container">
            <div className="parents__second-container">
                <h1 className="parents__title">Pentru parinti</h1>
                <div className="parents__ceva">
                    <div className="parents__div-left">
                        <ul>
                            {/* ----- adresa ----- */}
                            <li >
                                <div className="parents__li-title">Unde ne gasesti?</div>
                                <div className="parents__li-info"><ImLocation /> <span> Pitesti, strada STRADA, nr </span> <span className="span-arrow"><ImArrowRight2 /></span> <Button className="span-button" onClick={handleOpen}>Poze cu locatia!</Button> </div>
                            </li>

                            <Modal
                                open={open}
                                onClose={handleClose}
                            >
                                <Box sx={styleModal2}>
                                    <div className="box-title">Locatia noastra:</div>
                                    <Box sx={{ width: 900, height: 400, overflowY: 'scroll' }}>
                                        <ImageList variant="masonry" cols={4} gap={8}>
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img
                                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>
                                </Box>
                            </Modal>

                            {/* ----- telefon facebook instagram ----- */}
                            <li >
                                <div className="parents__li-title">Cum putem comunica?</div>
                                <div className="parents__li-info"> <ImFacebook2 /> <a href="https://www.facebook.com/TuTupHouse" target="_blank" rel="noreferrer" >Facebook</a></div>
                                <div className="parents__li-info"> <GrInstagram /> <a href="https://www.instagram.com/tuptuphouse/" target="_blank" rel="noreferrer">Instagram</a></div>
                                <div className="parents__li-info"> <AiFillPhone /> nr telefon</div>
                                <div className="parents__li-info"> <GrMail /> adresa de mail</div>
                            </li>
                        </ul>
                    </div>

                    <div className="parents__div-right">
                        <ul>
                            <li>
                                <div className="parents__li-title">Ce oferim parintilor in timpul petrecerii?</div>
                                <div className="parents__li-info-parents">Terasa fumatori</div>
                                <div className="parents__li-info-parents">Acces WIFI</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Parents;