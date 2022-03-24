import React, { useState } from "react";
import "./workshop.css";
import { Box } from "@mui/material";
import { ImageList } from "@mui/material";
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
import image18 from "./images/image18.jpeg";
import image19 from "./images/image19.jpeg";
import image20 from "./images/image20.jpeg";
import image21 from "./images/image21.jpeg";
import image22 from "./images/image22.jpeg";
import image23 from "./images/image23.jpeg";
import image24 from "./images/image24.jpeg";
import image25 from "./images/image25.jpeg";
import image26 from "./images/image26.jpeg";
import image27 from "./images/image27.jpeg";
import image28 from "./images/image28.jpeg";
import image29 from "./images/image29.jpeg";
import image30 from "./images/image30.jpeg";
// import image31 from "./images/image31.jpeg";
import image32 from "./images/image32.jpeg";
import image33 from "./images/image33.jpeg";
import image34 from "./images/image34.jpeg";
import image35 from "./images/image35.jpeg";
import image36 from "./images/image36.jpeg";
import image37 from "./images/image37.jpeg";
import image38 from "./images/image38.jpeg";
import image39 from "./images/image39.jpeg";
import image40 from "./images/image40.jpeg";
import image41 from "./images/image41.jpeg";
import image42 from "./images/image42.jpeg";
import image43 from "./images/image43.jpeg";
import image44 from "./images/image44.jpeg";
import image45 from "./images/image45.jpeg";

const data = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,
    image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23,
    image24, image25, image26, image27, image28, image29, image30, image32, image33, image34, 
    image35, image36, image37, image38, image39, image8, image40, image41, image42, image43, 
    image44, image45];

function Workshop() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightboxDisplay] = useState(false);

    // looping through our images array to create img elements
    const imageCards = data.map((image) => (
        <img className="image-card" onClick={() => showImage(image)} src={image} />
    ));

    // function to show a specific image in the lightbox and make lightbox visible
    const showImage = (image) => {
        setImageToShow(image);
        setLightboxDisplay(true);
    };

    // hide lightbox
    const hideLightbox = () => {
        setLightboxDisplay(false);
    };

    // show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = data.indexOf(imageToShow);
        console.log(data.indexOf(imageToShow));
        if (currentIndex >= data.lenght - 1) {
            setLightboxDisplay(false);
        } else {
            let nextImage = data[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    // show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = data.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightboxDisplay(false);
        } else {
            let nextImage = data[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };

    return (
        <div className="party-galery__main-container">
            <h1>
                Ateliere de creatie
            </h1>
            <Box sx={{ display: 'flex', justifyContent:'center', overflowY: 'scroll', paddingRight: 10, paddingLeft: 10}}>
                <ImageList cols={3} gap={8} >
                    {imageCards}
                </ImageList>
            </Box>
            {
                lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightbox}>
                        <button onClick={showPrev}>⭠</button>
                        <img id="lightbox-img" src={imageToShow}></img>
                        <button onClick={showNext}>⭢</button>
                    </div>
                    : ""
            }
        </div>
    );
}

export default Workshop;
