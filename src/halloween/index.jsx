import React from "react";
import './halloween.css';
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.png";
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
        img: image11,
        title: 'image8',
    },
    {
        img: image14,
        title: 'image9',
    },
    {
        img: image15,
        title: 'image10',
    },
    {
        img: image16,
        title: 'image11',
    },
    {
        img: image13,
        title: 'image12',
    },
    {
        img: image8,
        title: 'image13',
    },
    {
        img: image12,
        title: 'image14',
    },
    {
        img: image10,
        title: 'image15',
    },
    {
        img: image9,
        title: 'image16',
    },
    {
        img: image1,
        title: 'image1',
    }, {
        img: image6,
        title: 'image6',
    },
    {
        img: image7,
        title: 'image7',
    },
];
class Halloween extends React.Component {
    render() {
        return (
            <div className="halloween__main-container">
                <Box sx={{ width: 1000, height: 900, overflowY: 'scroll', paddingLeft: 20 }}>
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

export default Halloween;