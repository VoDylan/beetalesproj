import {Box, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import pieChart1 from "../assets/BeetalesAge.png"
import pieChart2 from "../assets/BeetalesCity.png"
import pieChart3 from "../assets/BeetalesNests.png"

export default function SurveyPage() {
    return (
        <Stack spacing={2} sx={{paddingX: 2, marginTop: "5rem"}}>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,

                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',
                }}>
                <Typography color='black' variant='h4'>
                    Purpose of the Survey
                </Typography>
            </Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#F7CE46',
                }}>
                <Typography color='black'>
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
                    border: '1px solid #000',
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',
                }}>
                <Typography color='black' variant='h4'>
                    Findings
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={4} alignItems="stretch" columns={2}>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7CE46',  border: '1px solid #000', paddingLeft: "1rem", paddingRight: "1rem" }}>
                            <Typography
                                variant="h4"
                                sx={{ fontSize: "2rem", textAlign: 'center',  }}
                                color={'black'}
                            >
                                The majority of our demographic of survey responders tend to be those aged between
                                18-24, which may influence responses gathered. Responses are also from all over the
                                country.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', backgroundColor: '#292828',  border: '1px solid #000' }}>
                            <img src={pieChart1} alt="Description" style={{ maxWidth: "100%", height: "auto", objectFit: 'cover' }} />
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAE4B3',  border: '1px solid #000', paddingLeft: "1rem", paddingRight: "1rem"  }}>
                            <Typography
                                variant="h4"
                                color={'black'}
                                sx={{ fontSize: "2rem", textAlign: 'center' }}>
                                Of these responses, participants strongly agree with the fact that bees have the right to live in cities, and that bee hives in the city should at least be relocated in the city, instead of being removed.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#292828',  border: '1px solid #000' }}>
                            <img src={pieChart2} alt="Description" style={{maxWidth: "100%", height: "auto"}}/>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7CE46',  border: '1px solid #000', paddingLeft: "1rem", paddingRight: "1rem"  }}>
                            <Typography variant="h4"
                                        color={'black'}
                                        sx={{ fontSize: "2rem", textAlign: 'center' }}>
                                Even though people agree that bees are important for the city because they are pollinators, that doesnt change the fact that people are still fearful of bees. Taking extreme precautions in the event that they do encounter a bee even though they are not as dangerous as people really percieve them to be.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#292828',  border: '1px solid #000' }}>
                            <img src={pieChart3} alt="Description" style={{maxWidth: "100%", height: "auto"}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}