import React, { useState } from "react";
import './sponsors.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import image1 from './images/pizza.webp';

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
        bgcolor: 'rgb(214, 178, 245)',
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
                        Meniul restaurantului <a href="https://labutoaie.com.ro/pizza" target="_blank" rel="noreferrer" >La Butoaie</a>
                    </Box>
                </Modal>

                {/* ------- Cofetaria Riviana ------- */}
                <Button sx={styleButton} onClick={handleOpen2}> Cofetaria Riviana</Button>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                >
                    <Box sx={styleModal}>
                        Sortiementele de tort le puteti vedea aici:
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