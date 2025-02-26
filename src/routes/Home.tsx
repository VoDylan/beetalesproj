import {Box, Grid, List, ListItem, Button, Stack, Typography} from "@mui/material";
// import Carousel from "../Components/Carousel.tsx";
import {useNavigate} from "react-router";
// import pieChart3 from "../assets/BeetalesNests.png";


export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/MapPage'); // Replace with your desired route
    };

    return (
        <Stack sx={{
            marginTop: "6rem",
            justifyContent: "center",
            width: "95%",
        }}>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    backgroundColor: '#C20F2E',
                    width: "fit-content",
                    marginBottom: "2rem"
                }}>
                <Typography color='white' variant='h1' fontWeight='bold'>
                    Have You Ever Seen These Signs?
                </Typography>
            </Box>

            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#292828', borderRadius: 1, border: '1px solid #000', marginBottom: "2rem" }}>
                <img src={"src/assets/pesticide_warning.jpg"} alt="Description" style={{maxWidth: "auto", height: "100%"}}/>
            </Box>

            {/*<Box*/}
            {/*    component="img"*/}
            {/*    src="src/assets/pesticide_warning.jpg"*/}
            {/*    alt="Image"*/}
            {/*    sx={{ width: '100%',*/}
            {/*        borderRadius: 1,*/}
            {/*        objectFit: 'cover',*/}
            {/*        height: '100%',*/}
            {/*        display: 'flex',*/}
            {/*        marginBottom: "2rem"    }}*/}
            {/*/>*/}

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                backgroundColor: '#C20F2E',
                                marginBottom: 1,
                            }}>
                            <Typography color='black' variant='h6'>Indirect</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <Typography color="white">Acute Poisoning</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Chronic Illnesses</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Skin and Eye Irritation</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Ingestion Risks</Typography>
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
                            backgroundColor: '#292828',
                        }}>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                backgroundColor: '#C20F2E',
                                marginBottom: 1,
                            }}>
                            <Typography color='black' variant='h6'>Direct</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <Typography color="white">Food Safety</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Economic Impact</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Ecosystem Collapse</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color="white">Nutritional Deficiency</Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
            <Button
                component="a"
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9231402/#:~:text=People%20who%20are%20both%20directly,number%20of%20serious%20chronic%20diseases"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    backgroundColor: 'red',
                    border: '2px solid black',
                    color: 'white',
                    padding: 2,
                    marginTop: "1rem",
                    '&:hover': {
                        backgroundColor: '#d50000',
                    },
                }}
            >
                <Typography variant="h3">
                    More Info on the Dangers of Pesticides
                </Typography>
            </Button>
            <Box
                sx ={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1, backgroundColor: "#C20F2E",
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    width: "fit-content",
                }}>
                <Typography color="white" variant="h2"> To ensure the health of ourselves and others it's worth asking, are pesticides worth truly helpful?</Typography>
            </Box>
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
                <Button variant="contained" color="#F7CE46" onClick={handleClick}
                        sx={{
                            padding: '0 8px',
                            width: "auto",
                            textTransform: 'none',
                            display: 'inline-block'
                        }}>
                    See the Map
                </Button>
            </Box>
        </Stack>
    )
}