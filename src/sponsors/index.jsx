import React, { useState } from "react";
import './sponsors.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem } from "@mui/material";
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
    }, {
        img: image16,
        title: 'image16',
    },
];

function Sponsors() {
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const styleButton = {
        marginlTop: 10,
        marginLeft: 5,
        padding: 4,
        fontSize: 'large',
        bgcolor: 'antiquewhite',
        borderRadius: 5,
    }

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgb(248, 246, 241)',
        border: '2px solid #000',
        boxShadow: 24,
        padding: 4,
        fontSize: 'large',
        textAlign: 'center',
    }

    const styleModal2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'rgb(248, 246, 241)',
        border: '2px solid #000',
        boxShadow: 24,
        padding: 4,
        fontSize: 'large',
        textAlign: 'center',
    }

    return (
        <div className="sponsors__main-container">
            <h1 className="sponsors__title">COLABORATORI</h1>
            <div className="sponsors__buttons">

                {/* ------- La Butoaie ------- */}
                <Button sx={styleButton} onClick={handleOpen1}> La Butoaie</Button>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                >
                    <Box sx={styleModal}>
                        <span className="sponsors__modal-title">Meniul restaurantului</span> <a href="https://labutoaie.com.ro/pizza" target="_blank" rel="noreferrer" >La Butoaie</a>
                    </Box>
                </Modal>

                {/* ------- Cofetaria Riviana ------- */}
                <Button sx={styleButton} onClick={handleOpen2}> Cofetaria Riviana</Button>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                >
                    <Box sx={styleModal2}>
                        <div className="sponsors__modal-title">Torturi aniversare:</div>
                        <Box sx={{ width: 700, height: 400, overflowY: 'scroll' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
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
            </div>
            {/* <div className="sponsors__photos">
                <img className="photo_pizza" src={image1} alt="pizza" />
            </div> */}
        </div>
    );
}

export default Sponsors;