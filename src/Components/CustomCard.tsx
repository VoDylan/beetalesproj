import React from "react";

interface CustomCardProps {
    imageUrl: string;
    text: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageUrl, text }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt="Card Image" style={styles.image} />
            <div style={styles.textOverlay}>{text}</div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        // borderRadius: '1px',
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textOverlay: {
        position: 'absolute',
        top: '75%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: '3rem',
        fontFamily: "Bree Serif",
        fontWeight: 'bold'
    },
};

export default CustomCard