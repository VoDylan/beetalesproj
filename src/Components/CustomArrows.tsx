import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{ ...style, display: 'block', backgroundColor: 'black', color: 'white', borderRadius: '50%' }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
}

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{ ...style, display: 'block', backgroundColor: 'black', color: 'white', borderRadius: '50%' }}
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
}
