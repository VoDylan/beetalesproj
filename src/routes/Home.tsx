import {Box, Button, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {useNavigate} from "react-router";
import CustomCard from "../Components/CustomCard.tsx";
import Carousel from "../Components/Carousel.tsx";
import sprayingPesticide from "../assets/SprayPesticide.jpg";

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
                    border: "#000 1px solid"
                }}>
                <Typography color='#000000' variant='h1' fontWeight={"Geologica"}>
                    The Real Cost of Pesticides
                </Typography>
            </Box>

            <Box sx={{width: '100%'}}>
                <Grid container spacing={"1rem"} direction="column" alignItems="center">
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <CustomCard imageUrl={sprayingPesticide as string} text={"Why do we use pesticides at the cost of our well being and environment?"}/>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            width: '100%',
                        }}>
                            <Box sx={{
                                width: 'stretch',
                                // height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img
                                    src="../assets/pesticide_warning.jpg"
                                    alt="Description"
                                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                />
                            </Box>
                            <Grid container spacing={1} direction="column" alignItems="stretch"
                            sx = {{
                                marginLeft: "1rem"
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <img
                                        src="../assets/Dead-bees.png"
                                        alt="Description"
                                        style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                                    />
                                </Box>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <img
                                        src="../assets/BewareBeeSign.jpg"
                                        alt="Description"
                                        style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                                    />
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#ffe468',
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    width: "fit-content",
                }}>
                <Typography color="black" variant="h3" fontFamily={"Nunito Sans"}>
                    {/*To ensure the health of ourselves and others it's worth asking, are pesticides really worth it?*/}
                    Pesticides destroy living environments pollinators, leading to less food sources declining populations
                </Typography>
            </Box>
            <Carousel/>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                backgroundColor: "#c5e1a5",
                marginTop: 2,
            }}>
                <Typography variant='h3' fontStyle={'bold'} color={"black"} fontFamily={"Nunito Sans"}
                            sx={{wordBreak: "break-word"}}>
                    Our study in Hong Kong and what we discovered!
                </Typography>
                <Typography variant='h3' fontStyle={'bold'} color={"black"} fontFamily={"Nunito Sans"}
                            sx={{wordBreak: "break-word"}}>Click below to see where we found pollinators!
                </Typography>

            </Box>
            <Box sx={{
                display: 'fit',
                justifyContent: 'center',
                marginTop: "1rem",

            }}>
                <Button variant="contained" onClick={handleClick}
                        sx={{
                            backgroundColor: "#c5e1a5",
                            color: "black",
                            fontSize: "2rem",
                            border: '1px solid #000',
                            fontFamily: "Geologica"

                        }}>
                    See Map
                </Button>
            </Box>
        </Stack>
    )
}