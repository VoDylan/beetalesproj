import {Box, Button, Stack, Typography} from "@mui/material";
import Carousel from "../Components/Carousel.tsx";
import {useNavigate} from "react-router";


export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about'); // Replace with your desired route
    };

    return (
        <Stack sx={{
            marginTop: "6rem",
            justifyContent: "center",
        }}>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2, backgroundColor: "#D9D9D9",
                marginTop: "1rem",
                marginBottom: "2rem",
            }}>
                <Typography variant='h1' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}>
                    What is the Current Status of Pollinators in Hong Kong?
                </Typography>
            </Box>
            <Carousel/>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2, backgroundColor: "#D9D9D9",
                marginTop: 2,
            }}>
                <Typography variant='h4' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}
                            sx={{wordBreak: "break-word"}}>
                    Our study in Hong Kong and what we discovered!
                </Typography>
                <Typography variant='h4' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}
                            sx={{wordBreak: "break-word"}}>Click below to see where we found pollinators!
                </Typography>

            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: "1rem"
            }}>
                <Button variant="contained" color="primary" onClick={handleClick}
                        sx={{
                            padding: '0 8px', // Adjust padding as needed
                            width: "auto",
                            textTransform: 'none', // Preserve text casing
                            display: 'inline-block'
                        }}>
                    See the Map
                </Button>
            </Box>
        </Stack>
    )
}