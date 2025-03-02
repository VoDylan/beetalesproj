import {Box, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import pieChart1 from "../assets/Q_ What age are you_.png"
import pieChart2 from "../assets/Q_ I like having bees around and they should be allowed in the ciity.png"
import pieChart3 from "../assets/Q_ Bee nests should be removed once found.png"

export default function SurveyPage() {
    return (
        <Stack spacing={2} sx={{paddingX: 2, marginTop: "5rem"}}>
            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',
                }}>
                <Typography color='black' variant='h4' fontFamily={"Abril Fatface"}>
                    Purpose of the Survey
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#ffe5ed',
                    textAlign:"left"
                }}
            >

                <Typography color='black' variant={"h5"} fontFamily={"Nunito Sans"} align={"left"}
                            sx={{
                                paddingLeft: '1.1rem',
                                paddingRight: '1.1rem',
                                textIndent: '2rem'

                            }}>
                    The purpose of the survey in our study was to assess public
                    perception of bees and explore the potential root causes behind
                    these perceptions. Based on our preliminary research, it was
                    evident that bees are not viewed favorably in urban areas
                    like Hong Kong, where people are less accustomed to insects
                    and often fear them. This observation aligned with our findings,
                    such as the frequent presence of prominent pesticide warning
                    signs throughout the city, which further highlighted the
                    negative attitudes toward insects like bees.
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',
                }}>
                <Typography color='black' variant='h4' fontFamily={"Abril Fatface"}>
                    Findings
                </Typography>
            </Box>
            <Box sx={{width: '100%'}}>
                <Grid container spacing={0} alignItems="stretch" columns={2}>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                            padding: '1.5rem'
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Abril Fatface"}>
                            Age and Location Demographics
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            backgroundColor: '#ffab91',
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            textAlign: "right"
                        }}>
                            <Typography
                                variant="h4"
                                sx={{fontSize: "2rem", textAlign: 'left',
                                    padding: '1.1rem',
                                    textIndent: '2rem'}}
                                color={'black'}
                                fontFamily={"Nunito Sans"}
                            >
                                The majority of our demographic of survey responders tend to be those aged
                                between 18-24, which may influence responses gathered. Responses are also from all over
                                the country.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{height: '100%'}}>
                            <img src={pieChart1 as string} alt="Description"
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'cover',}}/>
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffccbc',
                            marginTop: "1rem",
                            padding: '1.5rem'
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Abril Fatface"}>
                            Should bees be allowed to live in the city?
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            backgroundColor: '#ffccbc',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography
                                variant="h4"
                                color={'black'}
                                fontFamily={"Nunito Sans"}
                                    sx={{fontSize: "2rem", textAlign: 'left',
                                        padding: '1.1rem',
                                        textIndent: '2rem'}}>
                                Of these responses, participants strongly agree with the fact that bees have the right
                                to live in cities, and that bee hives in the city should at least be relocated in the
                                city, instead of being removed.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <img src={pieChart2 as string} alt="Description"
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'cover'}}/>
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                            marginTop: "1rem"
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Abril Fatface"}>
                            Should Bee Nests be removed once found?
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            backgroundColor: '#ffab91',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography variant="h4"
                                        color={'black'}
                                        fontFamily={"Nunito Sans"}
                                        sx={{fontSize: "2rem", textAlign: 'left',
                                            padding: '1.1rem',
                                            textIndent: '2rem'}}>
                                Even though people agree that bees are important for the city because they are
                                pollinators, that doesnt change the fact that people are still fearful of bees. Taking
                                extreme precautions in the event that they do encounter a bee even though they are not
                                as dangerous as people really percieve them to be.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <img src={pieChart3 as string} alt="Description"
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'cover'}}/>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#ffe5ed',
                    textAlign: 'left'
                }}>
                <Typography color='black' variant='h7' fontFamily={"Abril Fatface"}
                            fontStyle={'italic'}>Disclaimer: </Typography>
                <Typography color="black" variant='h7' fontFamily={"Nunito Sans"} align="left" fontStyle={'italic'}
                            sx={{
                                textIndent: '2rem'
                            }}>
                    Due to factors such as distrust or miscommunication, the majority of our data was obtained through
                    word of mouth.
                    This introduces sample bias and limits the statistical significance of our data, it still provides
                    valuable insights into public perceptions.
                </Typography>
            </Box>
        </Stack>
    );
}