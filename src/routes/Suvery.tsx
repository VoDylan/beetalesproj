import {Box, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import pieChart1 from "../assets/Q_ Which Hong Kong district do you live in_.png"
import pieChart2 from "../assets/Q_ I like having bees around and they should be allowed in the ciity.png"
import pieChart3 from "../assets/Q_ Which Hong Kong district do you live in_.png"

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
                <Typography color='black' variant='h4' fontFamily={"Geologica"}>
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
                }}
            >
                <Box
                    sx = {{
                        border: '1px solid #000',
                        padding: 2,
                        marginBottom: 2,
                        maxWidth: '100%',
                        width: 'fit-content',
                        marginX: 'auto',
                        backgroundColor: '#ffe5ed'
                    }}>
                    <Box
                        sx = {{
                            border: '1px solid #000',
                            padding: 2,
                            marginBottom: 2,
                            maxWidth: '100%',
                            width: 'fit-content',
                            marginX: 'auto',
                            backgroundColor: '#f8c2d4'
                        }}>
                        <Typography color='black' variant='h4' fontFamily={"Geologica"}> Disclaimer</Typography>
                    </Box>
                    <Typography color="black">
                        We initially planned to conduct in-person surveys at parks while collecting data on pollinators. However, due to factors such as distrust of surveys or QR codes, as well as reluctance to participate in surveys or interviews with foreigners, we were unable to gather many responses. As a result, the majority of our data comes from an online form that we shared with local friends around our age whom we met here. They were more responsive to participating in our survey.

                        While this approach introduces sample bias and limits the statistical significance of our data, it still provides valuable insights into public perceptions. Our data suggests that most young people have some understanding of the importance of bees. However, it is important to note that many older individuals may not necessarily share the same perspective.
                    </Typography>
                </Box>

                <Typography color='black' variant={"h5"} fontFamily={"Nunito Sans"}>
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
                <Typography color='black' variant='h4' fontFamily={"Geologica"}>
                    Findings
                </Typography>
            </Box>
            <Box sx={{width: '100%'}}>
                <Grid container spacing={0} alignItems="stretch" columns={2}>
                    <Box
                        sx = {{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Geologica"}>
                            Age and Location Demographics
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffab91',
                            border: '1px solid #000',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography
                                variant="h4"
                                sx={{fontSize: "2rem", textAlign: 'center',}}
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
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'cover', }}/>
                        </Box>
                    </Grid>
                    <Box
                        sx = {{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffccbc',
                            marginTop: "1rem"
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Geologica"}>
                            Should bees be allowed to live in the city?
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffccbc',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography
                                variant="h4"
                                color={'black'}
                                fontFamily={"Nunito Sans"}
                                sx={{fontSize: "2rem", textAlign: 'center'}}>
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
                            <img src={pieChart2 as string} alt="Description" style={{maxWidth: "100%", height: "100%", objectFit: 'cover'}}/>
                        </Box>
                    </Grid>
                    <Box
                        sx = {{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                            marginTop: "1rem"
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Geologica"}>
                            Should Bee Nests be removed once found?
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffab91',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography variant="h4"
                                        color={'black'}
                                        fontFamily={"Nunito Sans"}
                                        sx={{fontSize: "2rem", textAlign: 'center'}}>
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
                            <img src={pieChart3 as string} alt="Description" style={{maxWidth: "100%", height: "100%", objectFit: 'cover'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}