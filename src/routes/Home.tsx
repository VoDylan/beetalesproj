import {Box, List, ListItem, Button, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
// import Carousel from "../Components/Carousel.tsx";
import {useNavigate} from "react-router";
import sprayingPesticide from "../assets/spraying-pesticides.jpg";



export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/MapPage'); // Replace with your desired route
    };

    return (
        <Stack sx={{
            marginTop: "5rem",
            justifyContent: "center",
        }}>
            <Box
                sx={{
                    padding: 2,
                    width: "100%",
                    marginBottom: "2rem",
                    borderRadius: "0",
                    backgroundColor: '#c5e1a5',
                }}>
                <Typography color='#000000' variant='h1'>
                    The Real Cost of Pesticides
                </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Grid container spacing={4} direction="column" alignItems="center">
                    <Grid item xs={12} sx={{ width: '100%' }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <img
                                src="src/assets/SprayPesticide.jpg"
                                alt="Description"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ width: '100%' }}>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <img
                                        src="src/assets/pesticide_warning.jpg"
                                        alt="Description"
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <img
                                        src="src/assets/BewareBeeSign.jpg"
                                        alt="Description"
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>



            <Grid container spacing={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "2rem"
            }}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#f9d6b7',
                        }}>
                        <Box
                            sx={{
                                // border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                marginBottom: 1,
                            }}>
                            <Typography color='black' variant='h6'>Indirect</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <Typography color="black">Acute Poisoning</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Chronic Illnesses</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Skin and Eye Irritation</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Ingestion Risks</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#f9d6b7',
                        }}>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                marginBottom: 1,
                            }}>
                            <Typography color='black' variant='h6'>Direct</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <Typography color="black">Food Safety</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Economic Impact</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Ecosystem Collapse</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="black">Nutritional Deficiency</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
            {/*<Button*/}
            {/*    component="a"*/}
            {/*    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9231402/#:~:text=People%20who%20are%20both%20directly,number%20of%20serious%20chronic%20diseases"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    sx={{*/}
            {/*        backgroundColor: 'red',*/}
            {/*        border: '2px solid black',*/}
            {/*        color: 'white',*/}
            {/*        padding: 2,*/}
            {/*        marginTop: "1rem",*/}
            {/*        '&:hover': {*/}
            {/*            backgroundColor: '#d50000',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Typography variant="h3">*/}
            {/*        More Info on the Dangers of Pesticides*/}
            {/*    </Typography>*/}
            {/*</Button>*/}
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#ffe468',
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    width: "fit-content",
                }}>
                <Typography color="black" variant="h3" fontFamily={"Julius Sans One"}> To ensure the health of ourselves and others it's worth asking,
                    are pesticides really worth it?</Typography>
            </Box>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f9d6b7",
                marginTop: 2,
            }}>
                <Typography variant='h3' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}
                            sx={{wordBreak: "break-word"}}>
                    Our study in Hong Kong and what we discovered!
                </Typography>
                <Typography variant='h3' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}
                            sx={{wordBreak: "break-word"}}>Click below to see where we found pollinators!
                </Typography>

            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: "1rem",
                backgroundColor:"#f9d6b7"

            }}>
                <Button variant="contained" color="#E7EEE5" onClick={handleClick}
                        sx={{
                            padding: '0 8px',
                            width: "auto",
                            display: 'inline-block'
                        }}>
                    See the Map
                </Button>
            </Box>
        </Stack>
    )
}