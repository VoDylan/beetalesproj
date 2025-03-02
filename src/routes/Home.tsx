import {Box, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {useNavigate} from "react-router";
import CustomCard from "../Components/CustomCard.tsx";
import Carousel from "../Components/Carousel.tsx";
import sprayingPesticide from "../assets/SprayPesticide.jpg";
import pesticideWarning from "../assets/pesticide_warning.jpg"
import deadBees from "../assets/Dead-bees.png"
import bewareBee from "../assets/BewareBeeSign.jpg"

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
                <Typography color='#000000' variant='h1' fontFamily={"Geologica"}>
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
                                    src={pesticideWarning as string}
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
                                        src={deadBees as string}
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
                                        src={bewareBee as string}
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
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#ffe468',
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    width: "fit-content",
                }}>
                <Typography color="black" variant="h3" fontFamily={"Nunito Sans"}>
                    {/*To ensure the health of ourselves and others it's worth asking, are pesticides really worth it?*/}
                    Pesticides destroy living environments for pollinators, leading to less food sources declining populations
                </Typography>
            </Box>
            <Carousel/>
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: "#c5e1a5",
                    marginTop: 2,
                    cursor: 'pointer' // Add a pointer cursor to indicate clickable area
                }}
                onClick={handleClick} // Transfer the click functionality
            >
                <Typography
                    variant='h4'
                    fontStyle={'bold'}
                    color={"black"}
                    fontFamily={"Nunito Sans"}
                >
                    Click Here to see where we found pollinators in Hong Kong!
                </Typography>
            </Box>
        </Stack>
    )
}