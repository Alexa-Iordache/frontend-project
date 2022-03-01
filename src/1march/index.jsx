import React from "react";
import './1march.css';
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

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
];
class FirstMarch extends React.Component {
    render() {
        return (
            <div className="FirstMarch__main-container">
                <Box sx={{ width: 1000, height: 900, overflowY: 'scroll', paddingLeft: 18 }}>
                    <ImageList cols={3} gap={8}>
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

export default FirstMarch;