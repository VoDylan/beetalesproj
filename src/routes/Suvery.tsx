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
                    backgroundColor: "#c5e1a5",
                    padding: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        maxWidth: '100%',
                        marginX: 'auto',
                    }}
                >
                    <Typography variant="h2" align="left" color='black'
                                style={{fontFamily: 'Bree Serif'}}>Purpose</Typography>
                </Box>
                <Typography color="black"
                            align="left"
                            variant="h5"
                            style={{fontFamily: 'Nunito Sans'}}
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem'
                            }}
                >
                    The purpose of this project was to collect data on pollinators throughout Hong Kong and evlauate their condition. With this data, conclusions would be made about their wellbeing, including their resources, living conditions, and a rough estimate on their population. This would then be analyzed further to see how urban environments can be made more accomodating for bees as they are essential for our environment.
                </Typography>
            </Box>


            <Box
                sx={{
                    padding: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#ffe5ed',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        maxWidth: '100%',
                        marginX: 'auto',
                    }}>
                    <Typography color='black' variant='h2' align={'left'} fontFamily={"Bree Serif"}>Survey Purpose
                    </Typography>
                </Box>

                <Typography color='black' variant={"h5"} fontFamily={"Nunito Sans"} align={"left"}
                            sx={{
                                paddingLeft: '1.1rem',
                                paddingRight: '1.1rem',
                                textIndent: '2rem'
                            }}>
                    The purpose of our survey was to evaluate public perceptions of bees and explore the potential underlying reasons for these views. Preliminary research indicated that bees are generally perceived unfavorably in urban settings like Hong Kong, where residents are less familiar with insects and often harbor a fear of them. This observation is consistent with our findings, which include the frequent presence of prominent pesticide warning signs throughout the city, further underscoring the negative attitudes toward insects such as bees.
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#ffe468',
                }}>

                <Box
                    sx={{
                        padding: 2,
                        width: 'fit-content',
                        alignSelf: 'auto',
                    }}
                >
                    <Typography variant="h2" color='black' style={{fontFamily: 'Bree Serif'}}>Research
                        Question</Typography>
                </Box>
                <Typography color='black' variant='h5'
                            align="left"
                            style={{fontFamily: 'Nunito Sans'}}
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem'

                            }}>
                    Which key environmental and social factors influence pollinator populations across urban,
                    suburban, and rural areas of Hong Kong, and how can conservation efforts be enhanced
                    for greater effectiveness?
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: "#dcedc8",
                }}>
                <Box
                    sx={{
                        padding: 2,
                        width: 'fit-content',
                        alignSelf: 'auto',
                    }}
                >
                    <Typography variant="h2" color='black'
                                style={{fontFamily: 'Bree Serif'}}>Methodology</Typography>
                </Box>
                <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem'

                            }}>
                    For 8 weeks we collected data, created a guide on how to deal with bees, and this website to illustrate our data to help us come to a conclusion about our research question with the assistance of Beetales.

                </Typography>
                <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem',
                                fontWeight: 'bold',
                            }}>
                    Data Collection Methodology:
                    <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                                sx={{
                                    display: 'inline',
                                    paddingLeft: '0.5rem',
                                    fontWeight: 'normal',
                                }}>
                        The first 4 weeks were spent collecting data on pollinator presence in parks and hikes throughout Hong Kong. At each location, we recorded the humidity, temperature, weather, and date. For each blooming flower or bush of flowers, we then logged the number of pollinators that visited the plant for 10 minutes.
                    </Typography>
                </Typography>

                <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem',
                                fontWeight: 'bold',
                            }}>
                    Survey Methodology:
                    <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                                sx={{
                                    display: 'inline',
                                    paddingLeft: '0.5rem',
                                    fontWeight: 'normal',
                                }}>
                        During the first 4 weeks, survey data on perception of bees in Hong Kong on bees was also collected. Though, due to miscommunication while trying to gather data, locals were hesitant to take our survey, leading to a low sample size for the survey. Responses came primarily through word of mouth, and as such, data may be skewed.
                    </Typography>
                </Typography>

                <Typography color='black' style={{fontFamily: 'Nunito Sans'}} variant="h5" align="left"
                            sx={{
                                padding: '1.1rem',
                                textIndent: '2rem'

                            }}>
                    Based on the survey and data collection, a written report and final presentation was created to demonstrate the intent methodology and results of our project.
                </Typography>
            </Box>




            <Box sx={{width: '100%'}}>
                <Box
                    sx={{
                        padding: 2,
                        maxWidth: '100%',
                        width: 'stretch',
                        backgroundColor: '#c5e1a5',
                    }}>
                    <Typography color='black' variant='h2' fontFamily={"Bree Serif"}>
                        Findings
                    </Typography>
                </Box>
                <Grid container alignItems="stretch" columns={2}>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                            padding: "2rem"
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Bree Serif"}>
                            Age and Location Demographics
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            backgroundColor: '#ffab91',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "2rem",
                                    textAlign: 'left',
                                    padding: '1.1rem',
                                    textIndent: '2rem'
                                }}
                                color={'black'}
                                fontFamily={"Nunito Sans"}
                            >
                                The majority of our demographic of survey responders tend to be those aged
                                between 18-24, which may influence responses gathered. Responses are from throughout
                                Hong Kong.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src={pieChart1 as string} alt="Description"
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'fill', paddingLeft: "1.5rem"}}/>
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffccbc',
                            padding: '1.5rem'
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Bree Serif"}>
                            Should bees be allowed to live in the city?
                        </Typography>
                    </Box>
                    <Grid size={1}>
                        <Box sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            backgroundColor: '#ffccbc',
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }}>
                            <Typography
                                variant="h4"
                                color={'black'}
                                fontFamily={"Nunito Sans"}
                                sx={{
                                    fontSize: "2rem", textAlign: 'left',
                                    padding: '1.1rem',
                                    textIndent: '2rem'
                                }}>
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
                            justifyContent: 'center'
                        }}>
                            <img src={pieChart2 as string} alt="Description"
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'fill', paddingLeft: "1.5rem"}}/>
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            width: 'stretch',
                            backgroundColor: '#ffab91',
                            padding: "2rem"
                        }}>
                        <Typography color={'black'} variant={"h3"} fontFamily={"Bree Serif"}>
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
                                        sx={{
                                            fontSize: "2rem", textAlign: 'left',
                                            padding: '1.1rem',
                                            textIndent: '2rem'
                                        }}>
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
                                 style={{maxWidth: "100%", height: "100%", objectFit: 'fill'}}/>
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
                <Typography color='black' variant='h6' fontFamily={"Bree Serif"}
                            fontStyle={'italic'}>Disclaimer: </Typography>
                <Typography color="black" variant='h6' fontFamily={"Nunito Sans"} align="left" fontStyle={'italic'}
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