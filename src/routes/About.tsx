import {Box, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        <Stack spacing={2} sx={{ paddingX: 2}}>
        <Box
            sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 1,
                backgroundColor: "#444444",
                maxWidth: '100%',
                width: 'fit-content',
                marginX: 'auto',
                alignSelf: 'center',
            }}
        >
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    marginBottom: 2,
                    fontSize: '20px',
                    width: 'fit-content',
                    alignSelf: 'auto',

                }}
            >
                <Typography variant="h6" color={'white'}>Purpose</Typography>
            </Box>
            <Typography color="white">
                In completion of the Interactive Qualifying Project at WPI done by students in their
                junior year the following students, James Gikas, Keerthana Jayamoorthy, Valli Velmurugan,
                and Dylan Vo, were placed with the sponsor Beetales in Hong Kong to answer the following
                research question.
            </Typography>
        </Box>

<Box
    sx={{
        border: '1px solid #000',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2,
        maxWidth: '100%',
        width: 'fit-content',
        marginX: 'auto',
        backgroundColor: '#F8CB00',
    }}>
    <Typography>
        Which key environmental and social factors influence pollinator populations across urban,
        suburban, and rural areas of Hong Kong, and how can conservation efforts be enhanced
        for greater effectiveness?
    </Typography>
</Box>

<Box
    sx={{
        border: '1px solid #000',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2,
        maxWidth: '100%',
        width: 'fit-content',
        marginX: 'auto',
        backgroundColor: '#EFD0CA',
}}>
    <Typography>
        For 8 weeks we collected data and created a guide on how to deal with bees and wasps and this website
        to illustrate our data to help us come to a conclusion about our research question under the guidance
        of our sponsor. We spent the first 4 weeks collecting data on pollinator presence in parks and hikes
        while trying to get locals to take our survey to collect data on pollinator perception. Based on the
        results we created a written report and final presentation under the guidance of our advisors to
        demonstrate the intent methodology and results of our project. Below is more information on us, the
        students who worked on this project, and our advisors and sponsor who guided us. And below that is
        our full written report on our project!
    </Typography>
</Box>

<Box
    sx={{
        border: '1px solid #000',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2,
        maxWidth: '100%',
        width: 'fit-content',
        alignSelf: 'flex-start',
        backgroundColor: '#EFD0CA',
}}>
    <Typography fontSize='25'>
        About Us
    </Typography>
</Box>

<Box
    sx={{
        display: 'flex',
        gap: 2,
    }}
>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        }}
    >
        <Box
            component="img"
            src="/path"
            alt="Student 1"
            sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
            }}
        />
        <Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    width: 'fit-content',
                    backgroundColor: '#C20F2E',
                }}
            >
                <Typography variant ="body1" color='white'>James Gikas</Typography>
            </Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    marginTop: 1,
                    backgroundColor: '#F8CB00',
                }}
            >
                <Typography variant="body2">Mechanical Engineering Class of 26'</Typography>
            </Box>
        </Box>
    </Box>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        }}
    >
        <Box
            component="img"
            src="/path"
            alt="Student 2"
            sx={{
                width:50,
                height: 50,
                borderRadius: '50%',
            }}
        />
        <Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    width: 'fit-content',
                    backgroundColor: '#C20F2E',
                }}
            >
                <Typography variant="body1" color='white'>Keerthana Jayamoorthy</Typography>
            </Box>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 1,
                    borderRadius: 1,
                    textAlign: 'left',
                    marginTop: 1,
                    backgroundColor: '#F8CB00',
                }}
            >
                <Typography variant="body2">Computer Science Class of 26'</Typography>
            </Box>
        </Box>
    </Box>
</Box>
<Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="/path"
                        alt="Student 3"
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                        }}
                    />
                    <Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                backgroundColor: '#C20F2E',
                            }}
                        >
                            <Typography variant ="body1" color='white'>Valli Velmurugan</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                marginTop: 1,
                                backgroundColor: '#F8CB00',
                            }}
                        >
                            <Typography variant="body2">Biomedical Engineering Class of 26'</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="/path"
                        alt="Student 4"
                        sx={{
                            width:50,
                            height: 50,
                            borderRadius: '50%',
                        }}
                    />
                    <Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                backgroundColor: '#C20F2E',
                            }}
                        >
                            <Typography variant="body1" color='white'>Dylan Vo</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                marginTop: 1,
                                backgroundColor: '#F8CB00',
                            }}
                        >
                            <Typography variant="body2">Computer Science Class of 26'</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
<Box
    sx={{
        border: '1px solid #000',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2,
        maxWidth: '100%',
        width: 'fit-content',
        marginX: 'auto',
        backgroundColor: '#EFD0CA',
    }}>
        <Typography fontSize='25'>
            Advisors
        </Typography>
</Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="/path"
                        alt="Advisor 1"
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                        }}
                    />
                    <Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                backgroundColor: '#C20F2E',
                            }}
                        >
                            <Typography variant ="body1" color='white'>Clare Gillis</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                marginTop: 1,
                                backgroundColor: '#F8CB00',
                            }}
                        >
                            <Typography variant="body2">The Global School</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="/path"
                        alt="Advisor 2"
                        sx={{
                            width:50,
                            height: 50,
                            borderRadius: '50%',
                        }}
                    />
                    <Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                backgroundColor: '#C20F2E',
                            }}
                        >
                            <Typography variant="body1" color='white'>John Lindholm</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #000',
                                padding: 1,
                                borderRadius: 1,
                                textAlign: 'left',
                                marginTop: 1,
                                backgroundColor: '#F8CB00',
                            }}
                        >
                            <Typography variant="body2">The Business School</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
 <Box
     sx={{
         border: '1px solid #000',
         padding: 2,
         borderRadius: 1,
         marginBottom: 2,
         maxWidth: '100%',
         width: 'fit-content',
         marginX: 'auto',
         backgroundColor: '#EFD0CA',
     }}>
         <Typography fontSize='25'>
               Sponsor
         </Typography>
 </Box>
  <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Box
                    component="img"
                    src="/path"
                    alt="Sponsor"
                    sx={{
                        width:50,
                        height: 50,
                        borderRadius: '50%',
                    }}
                />
                <Box>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 1,
                            borderRadius: 1,
                            textAlign: 'left',
                            width: 'fit-content',
                            backgroundColor: '#C20F2E',
                        }}
                    >
                        <Typography variant="body1" color='white'>Harry Freecss</Typography>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 1,
                            borderRadius: 1,
                            textAlign: 'left',
                            marginTop: 1,
                            backgroundColor: '#F8CB00',
                        }}
                    >
                        <Typography variant="body2">Founder of Beetales</Typography>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}