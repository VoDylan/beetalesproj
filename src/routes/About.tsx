import {Box, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        <Stack spacing={2} sx={{paddingX: 2, marginTop: "5rem"}}>

            <Box
                sx={{
                    // border: '1px solid #000',
                    padding: 2,
                    backgroundColor: "#c5e1a5",
                    maxWidth: '100%',
                    width: 'fit-content',
                    // marginX: 'auto',
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid #000',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        marginBottom: "1rem",
                        fontSize: '20px',
                        width: 'fit-content',
                        alignSelf: 'auto',

                    }}
                >
                    <Typography variant="h2" color='black' style={{fontFamily: 'Julius Sans One'}}>Purpose</Typography>
                </Box>
                <Typography color="black">
                    In completion of the Interactive Qualifying Project at WPI done by students in their
                    junior year the following students, James Gikas, Keerthana Jayamoorthy, Valli Velmurugan,
                    and Dylan Vo, were placed with the sponsor Beetales in Hong Kong to answer the following
                    research question.
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    // marginX: 'auto',
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#ffe468',
                    border: '1px solid #000',
                }}>
                <Box
                    sx={{
                        padding: 2,
                        marginBottom: "1rem",
                        fontSize: '20px',
                        width: 'fit-content',
                        alignSelf: 'auto',

                    }}
                >
                    <Typography variant="h2" color='black' style={{fontFamily: 'Julius Sans One'}}>Research
                        Question</Typography>
                </Box>
                <Typography color='black' variant='h4'>
                    Which key environmental and social factors influence pollinator populations across urban,
                    suburban, and rural areas of Hong Kong, and how can conservation efforts be enhanced
                    for greater effectiveness?
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: "#dcedc8",
                    border: '1px solid #000',
                }}>
                <Typography color='black' fontFamily={"Nunito Sans"} variant="h5">
                    For 8 weeks we collected data and created a guide on how to deal with bees and wasps and this
                    website to illustrate our data to help us come to a conclusion about our research question under the
                    guidance of our sponsor. We spent the first 4 weeks collecting data on pollinator presence in parks and hikes
                    while trying to get locals to take our survey to collect data on pollinator perception. Based on the
                    results we created a written report and final presentation under the guidance of our advisors to
                    demonstrate the intent methodology and results of our project. Below is more information on us, the
                    students who worked on this project, and our advisors and sponsor who guided us.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically
                    alignItems: 'center', // Center horizontally
                    gap: 4, // Add spacing between sections
                    padding: 2, // Add padding to the container
                }}
            >
                {/* Wrapper Box to Ensure Full Width */}
                <Box sx={{ overflow: 'hidden' }}>
                    {/* About Us Banner */}
                    <Box
                        sx={{
                            padding: 2, // Padding inside the banner
                            width: '100vw', // Full viewport width
                            backgroundColor: '#c5e1a5', // Background color
                            textAlign: 'center', // Center text inside the banner
                            border: '0px solid #000', // Border for the banner
                            display: 'flex', // Use flexbox for alignment
                            justifyContent: 'center', // Center content horizontally
                            alignItems: 'center', // Center content vertically
                            height: 'auto', // Keep the same height as before
                            position: 'relative', // Required for negative margins
                            left: 'calc(-50vw + 50%)', // Adjust for any parent padding
                            right: 'calc(-50vw + 50%)', // Adjust for any parent padding
                        }}
                    >
                        <Typography variant="h2" color="black">
                            About Us
                        </Typography>
                    </Box>
                </Box>

                {/* Student Boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Stack rows vertically
                        alignItems: 'center', // Center horizontally
                        gap: 4, // Add spacing between rows
                        width: '100%', // Take full width of the container
                    }}
                >
                    {/* First Row: Student 1 and Student 2 */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap', // Allow wrapping on smaller screens
                            gap: 4, // Add spacing between student boxes
                            justifyContent: 'center', // Center the boxes in the row
                            width: '100%', // Take full width of the container
                        }}
                    >
                        {/* Student 1 */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                padding: 2, // Increase padding for bigger boxes
                                border: '1px solid #000',
                                backgroundColor: '#ffe5ed',
                            }}
                        >
                            <Box
                                component="img"
                                src="src/assets/James_Headshot.JPG"
                                alt="Student 1"
                                sx={{
                                    width: 80, // Increase image size
                                    height: 80, // Increase image size',
                                    objectFit: "cover"
                                }}
                            />
                            <Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        borderWidth: '2px',
                                        textAlign: 'left',
                                        width: 'fit-content',
                                        backgroundColor: '#f8c2d4',
                                    }}
                                >
                                    <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                        James Gikas
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        textAlign: 'left',
                                        marginTop: 1,
                                        backgroundColor: '#ffe5ed',
                                    }}
                                >
                                    <Typography variant="body2" color='black'>
                                        Mechanical Engineering Class of 26'
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Student 2 */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                padding: 2, // Increase padding for bigger boxes
                                border: '1px solid #000',
                                backgroundColor: '#ffe5ed',
                            }}
                        >
                            <Box
                                component="img"
                                src="src/assets/Keethu_Headshot.jpg"
                                alt="Student 2"
                                sx={{
                                    width: 80, // Increase image size
                                    height: 80, // Increase image size0%',
                                }}
                            />
                            <Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        borderWidth: '2px',
                                        textAlign: 'left',
                                        width: 'fit-content',
                                        backgroundColor: '#f8c2d4',
                                    }}
                                >
                                    <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                        Keerthana Jayamoorthy
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        textAlign: 'left',
                                        marginTop: 1,
                                        backgroundColor: '#ffe5ed',
                                    }}
                                >
                                    <Typography variant="body2" color='black'>
                                        Computer Science Class of 26'
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Second Row: Student 3 and Student 4 */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap', // Allow wrapping on smaller screens
                            gap: 4, // Add spacing between student boxes
                            justifyContent: 'center', // Center the boxes in the row
                            width: '100%', // Take full width of the container
                        }}
                    >
                        {/* Student 3 */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                padding: 2, // Increase padding for bigger boxes
                                border: '1px solid #000',
                                backgroundColor: '#ffe5ed',
                            }}
                        >
                            <Box
                                component="img"
                                src="src/assets/Valli_Headshot.jpeg"
                                alt="Student 3"
                                sx={{
                                    width: 80, // Increase image size
                                    height: 80, // Increase image size0%',
                                }}
                            />
                            <Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        borderWidth: '2px',
                                        textAlign: 'left',
                                        width: 'fit-content',
                                        backgroundColor: '#f8c2d4',
                                    }}
                                >
                                    <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                        Valli Velmurugan
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        textAlign: 'left',
                                        marginTop: 1,
                                        backgroundColor: '#ffe5ed',
                                    }}
                                >
                                    <Typography variant="body2" color='black'>
                                        Biomedical Engineering Class of 26'
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Student 4 */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                                padding: 2, // Increase padding for bigger boxes
                                border: '1px solid #000',
                                backgroundColor: '#ffe5ed',
                            }}
                        >
                            <Box
                                component="img"
                                src="src/assets/Dylan_Headshot.jpeg"
                                alt="Student 4"
                                sx={{
                                    width: 80, // Increase image size
                                    height: 80, // Increase image size',
                                }}
                            />
                            <Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        borderWidth: '2px',
                                        textAlign: 'left',
                                        width: 'fit-content',
                                        backgroundColor: '#f8c2d4',
                                    }}
                                >
                                    <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                        Dylan Vo
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        border: '1px solid #000',
                                        padding: 1,
                                        textAlign: 'left',
                                        marginTop: 1,
                                        backgroundColor: '#ffe5ed',
                                    }}
                                >
                                    <Typography variant="body2" color='black'>
                                        Computer Science Class of 26'
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically
                    alignItems: 'center', // Center horizontally
                    gap: 4, // Add spacing between sections
                    padding: 2, // Add padding to the container

                }}
            >
                {/* Heading */}
                <Box sx={{
                    padding: 2,
                    width: 'fit-content',
                    backgroundColor: "#c5e1a5",
                    textAlign: 'center', // Center text inside the box
                    border: '1px solid #000',}}>
                    <Typography variant="h3" sx={{textAlign: 'center'}} color='black'>
                        Special Thanks to our Advising Professors and Sponsor
                    </Typography>

                </Box>


                {/* Advisor and Sponsor Boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap', // Allow wrapping on smaller screens
                        gap: 4, // Add spacing between boxes
                        justifyContent: 'center', // Center the boxes in the row
                        width: '100%', // Take full width of the container
                    }}
                >
                    {/* Advisor 1 */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            padding: 2, // Increase padding for bigger boxes
                            border: '1px solid #000',
                            backgroundColor: '#ffccbc',
                        }}
                    >
                        <Box
                            component="img"
                            src="/path"
                            alt="Advisor 1"
                            sx={{
                                width: 80, // Increase image size
                                height: 80, // Increase image size0%',
                            }}
                        />
                        <Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    borderWidth: '2px',
                                    textAlign: 'left',
                                    width: 'fit-content',
                                    backgroundColor: '#ffab91',
                                }}
                            >
                                <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                    Clare Gillis
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    textAlign: 'left',
                                    marginTop: 1,
                                    backgroundColor: '#ffccbc',
                                }}
                            >
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>The Global School</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Advisor 2 */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            padding: 2, // Increase padding for bigger boxes
                            border: '1px solid #000',
                            backgroundColor: '#ffccbc',
                        }}
                    >
                        <Box
                            component="img"
                            src="/path"
                            alt="Advisor 2"
                            sx={{
                                width: 80, // Increase image size
                                height: 80, // Increase image size0%',
                            }}
                        />
                        <Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    borderWidth: '2px',
                                    textAlign: 'left',
                                    width: 'fit-content',
                                    backgroundColor: '#ffab91',
                                }}
                            >
                                <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                    John Lindholm
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    textAlign: 'left',
                                    marginTop: 1,
                                    backgroundColor: '#ffccbc',
                                }}
                            >
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>The Business School</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Sponsor */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            minWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            maxWidth: {xs: '100%', sm: '45%', md: '30%'}, // Responsive width
                            padding: 2, // Increase padding for bigger boxes
                            border: '1px solid #000',
                            backgroundColor: '#ffccbc',
                        }}
                    >

                        <Box
                            component="img"
                            src="src/assets/Harry_Headshot.JPG"
                            alt="Sponsor"
                            sx={{
                                // maxWidth: "100%",
                                // height: "25%",
                                width: 100,
                                height: 120
                            }}
                        />
                        <Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    borderWidth: '2px',
                                    textAlign: 'left',
                                    width: 'fit-content',
                                    backgroundColor: '#ffab91',
                                }}
                            >
                                <Typography variant="body1" color="black" fontFamily={"Nunito Sans"}>
                                    Harry Wong
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 1,
                                    textAlign: 'left',
                                    marginTop: 1,
                                    backgroundColor: '#ffccbc',
                                }}
                            >
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>Founder of Beetales</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}