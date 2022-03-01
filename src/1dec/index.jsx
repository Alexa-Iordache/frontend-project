import React from "react";
import './1dec.css';
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import image6 from "./images/image6.jpeg";
import image7 from "./images/image7.jpeg";
import image8 from "./images/image8.jpeg";

const itemData = [
    {
        img: image6,
        title: 'image1',
    },
    {
        img: image1,
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
        img: image2,
        title: 'image5',
    },
    {
        img: image5,
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

];
class FirstDec extends React.Component {
    render() {
        return (
            <div className="firstdec__main-container">
                <Box sx={{ width: 1000, height: 900, overflowY: 'scroll', paddingLeft: 18 }}>
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
            </div>
        );
    }
}

export default FirstDec;