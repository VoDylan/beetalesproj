import {Box, Stack, Typography} from "@mui/material";
import DylanHeadshot from "../assets/Dylan_Headshot.jpeg"
import JamesHeadshot from "../assets/James_Headshot.png"
import KeethuHeadshot from "../assets/Keethu_Headshot.jpg"
import ValliHeadshot from "../assets/Valli_Headshot.jpeg"
import HarryHeadshot from "../assets/Harry_Headshot.png"
import ClareHeadshot from "../assets/Clare_Headshot.jpg"
import JedHeadshot from "../assets/Jed_Headshot.png"
import Grid from "@mui/material/Grid2";
import JamesReflect from "../assets/Jreflect.jpg";
import KeethuReflect from "../assets/Kreflect.jpg";
import ValliReflect from "../assets/ValliConc.jpg";
import DylanReflect from "../assets/DylanConc.jpg";

export default function AboutPage() {
    const personalReflectionImages = [
        {
            title: "James",
            src: JamesReflect,
            description: "Overall based on data observed and recorded it is clear that the bee population in Hong Kong needs improvement. If the government worked together with the organizations in charge of the floral biodiversity in local parks, they could find plants that are not just aesthetically pleasing but also better for the environment. By doing this not only would it provide bees with an easier way to collect food and help pollinate the other plants, it would also improve their population. In terms of public perception, I would recommend some sort of education reform regarding what is taught in local primary schools about pollinators, if anything is taught at all about them. It appears while many acknowledge bees are important, they are not understanding as to how docile they can be if unprovoked. If in the instance there is a hive on someone's property or home, people should be taught to call a local conservation instead of trying to kill the hive, so it can be kept alive and relocated."
        },
        {
            title: "Keethu",
            src: KeethuReflect,
            description: "All of our preliminary research pretty much aligned with what we in the data we took about bees and other pollinators in Hong Kong. Because it's a very urban city there not much space for them to live or suitable plants to sustain them. It's also sad that most people are also very scared of them which contributes to their dwindling population. Although our findings were relatively what we expected I'm glad for this opportunity to explore Hong Kong."
        },
        {
            title: "Valli",
            src: ValliReflect,
            description: "This project with Beetales has opened my eyes to the major issues with urbanization and development on the environment not only to the animals that lose their habitats, but to the plants in the city as well. Travelling through the parks and seeing the lack of local flowering plants in person while taking data made the initiatives of Beetales and many of the local conservation groups much more relevant. It also made me realise that many people that are in the thick of the city sometimes don’t understand the importance of insects such as bees, or even birds in the ecosystems of the surrounding areas. This has made me reflect on how lucky I am to be able to to increase awareness about the importance of pollinators and preserving the local biodiversity while coexisting with the bustling city."
        },
        {
            title: "Dylan",
            src: DylanReflect,
            description: "Over the course of this project I have been extremely privileged to have explored a large part of Hong Kong while also observing the parks and hikes. The findings our team has discovered about parks in Hong Kong has been very interesting to me, as the number of pollinators is not just reliant on the number of flowers but also the species of flowers found in parks. Among other things, I have learned a lot working with Beetales and I am happy I was able to contribute to this project. This experience has changed the way I look at the environment and greatly respect the work that other conservation groups do to sustain our environment. "
        },
    ];

    return (
        <Stack spacing={2} sx={{marginTop: "5rem"}}>

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
                    <Typography variant="h2" align="center" color='black'
                                style={{fontFamily: 'Bree Serif'}}>About Us</Typography>
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
                    This project was completed as part of the Interactive Qualifying Project at WPI, done by the following students: James Gikas, Keerthana Jayamoorthy, Valli Velmurugan, and Dylan Vo, who worked with Beetales to answer the following research question.
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
                                src={JamesHeadshot}
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
                                src={KeethuHeadshot}
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
                                src={ValliHeadshot}
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
                                src={DylanHeadshot}
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
                            src={ClareHeadshot}
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
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>The Global
                                    School</Typography>
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
                            src={JedHeadshot}
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
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>The Business
                                    School</Typography>
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
                            src={HarryHeadshot}
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
                                <Typography variant="body2" color='black' fontFamily={"Nunito Sans"}>Founder of
                                    Beetales</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{width: '100%', overflow: 'hidden'}}> {/* Ensure the Box takes full width */}
                <Box
                    sx={{
                        backgroundColor: '#c5e1a5',
                        padding: 2,
                    }}
                >
                    <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                        Personal Reflections
                    </Typography>
                </Box>
                <Grid container spacing={0}> {/* Set spacing to 0 for no gaps between images */}
                    {personalReflectionImages.map((image, index) => (
                        <Grid size={{xs: 12, sm: 6}} key={index}> {/* 2 images per row on medium screens */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    width: '100%',
                                    height: '100%',// Set a fixed height for the images
                                    '&:hover .description': {
                                        opacity: 1,
                                    },

                                }}
                            >
                                <img
                                    src={image.src as string}
                                    alt={image.title}
                                    style={{width: '100%', height: '100%', objectFit: 'cover'}} // Fill the box
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '2px',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                    className="description"
                                >
                                    <Typography variant="h6" fontFamily={"Nunito Sans"}>{image.description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}