import React from 'react';
import Slider from 'react-slick';
import {Box, Card, CardMedia, Grid2} from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic1 from "../assets/parkImages/D5_KowloonBird.jpg"
import Pic2 from "../assets/parkImages/DragonsBack_P5_Pic3.jpg"
import Pic3 from "../assets/parkImages/D7_YuenShin_Plant5.jpg"
import Pic4 from "../assets/parkImages/D1_ChaiWan_P5_Pic3.jpg"
import Pic5 from "../assets/parkImages/D5_KowloonBird_P12_Pic2.jpg"

const images = [
    { url:Pic1, alt: 'Image 1' },
    { url:Pic2, alt: 'Image 2' },
    { url:Pic3, alt: 'Image 3' },
    { url:Pic4, alt: 'Image 4' },
    { url:Pic5, alt: 'Image 5' }
];

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    };

    return (

        <Box sx={{ width: '100%', margin: '0 auto', marginBottom: "1rem" }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Grid2 key={index} container spacing={0} sx={{ }}>
                        <Grid2 item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={image.url as string}
                                    alt={image.alt}
                                    sx={{ width: "25rem", height: "20rem", objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid2>
                    </Grid2>
                ))}
            </Slider>
        </Box>
    );
}
