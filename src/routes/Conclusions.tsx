import {Box, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import BeetalesC from "../assets/BeetalesConc.jpg"
import KadoorieFarm from "../assets/Kadoorie_Farm.jpg"
import MaiPo from "../assets/Mai_Po.png"
import FungYuen from "../assets/FungYuen.jpg"
import Bat from "../assets/BatRadar.webp"
import Tnc from "../assets/Tnc.jpg"
import BeesWasps from "../assets/wasp_bee.png"

export default function ConclusionPage() {
    const images = [
        {
            src: BeetalesC,
            title: 'Beetales',
            description: 'Beetales is a dedicated organization focused on pollinator conservation. They actively rescue bees that have lost their hives and work to educate the public about the vital role bees play in our ecosystem. Through engaging workshops and classes, such as lip balm making using beeswax and mead making with honey, Beetales fosters a deeper understanding and appreciation for these essential pollinators.',
            link: 'https://www.beetales.com.hk/',
        },
        {
            src: KadoorieFarm,
            title: 'Kadoorie Farms',
            description: 'Kadoorie Farm and Botanic Garden started as a project to help farmers become self-sufficient through agricultural aid. It has since transformed barren land into thriving forests and mature woodlands. Today, it is a leading advocate for sustainability, ecosystem restoration, and endangered species conservation in Hong Kong and beyond. Their mission is to achieve sustainable coexistence between humans and nature.',
            link: 'https://www.kfbg.org/en/',
        },
        {
            src: MaiPo,
            title: 'Mai Po Wetlands Reserve',
            description: 'Mai Po Wetland Reserve is run by the WWF and serves to protect the Mai Po Wetlands and maintain the biodiversity of the region. The wetlands are maintained in part because they serve as a major stopover and habitat for over 500 bird species on the East Asian-Australasian Flyway for migration. They believe in preserving the green zones and country parks, as well as improving the parks within the city as well  order to improve the quality of life for the wildlife and humans alike.',
            link: 'https://www.wwf.org.hk/en/wetlands/booking/?gad_source=1',
        },
        {
            src: FungYuen,
            title: 'Fung Yuen Butterfly Reserve',
            description: 'The Fung Yuen Butterfly Reserve is a conservation area with the goal of protecting butterfly populations and their local habitats. On top of that, the reserve includes many diverse flowers that support various local butterfly species. It serves as an educational center, with the goal of spreading awareness about the importance of biodiversity and the need for conservation in Hong Kong.',
            link: 'https://www.fungyuen.org/',
        },
        {
            src: Bat,
            title: 'Hong Kong Bat Radar',
            description: 'Hong Kong Bat Radar is a comprehensive local bat information platform, offering up-to-date, scientifically accurate, and locally relevant information on bats',
            link: 'https://hkbatradar.com/en/home/',
        },
        {
            src: Tnc,
            title: 'The Nature Conservancy',
            description: 'The Nature Conservancy works to protect the lands and waters on which all life in Hong Kong depends on.',
            link: 'https://www.tnc.org.hk/en-hk/about-us/who-we-are/',
        },
    ];

    return (
        <Stack spacing={2} sx={{paddingX: 2, marginTop: '5rem'}}>
            <Box
                sx={{
                    border: '0px solid #000', // Border for the entire container
                    borderRadius: 1,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    overflow: 'hidden', // Ensures the border-radius is applied correctly
                }}
            >
                {/* Title Box - No Padding */}
                <Box
                    sx={{
                        backgroundColor: '#c5e1a5', // Slightly darker green for the title box
                        width: '100%', // Ensure the title box spans the full width
                    }}
                >
                    <Typography color="black" variant="h4" align="center" fontFamily={"Bree Serif"} sx={{padding: 2}}>
                        Which key environmental and social factors influence pollinator populations across urban,
                        suburban, and rural areas of Hong Kong, and how can conservation efforts be enhanced for greater
                        effectiveness?
                    </Typography>
                </Box>

                {/* Content Box */}
                <Box
                    sx={{
                        backgroundColor: '#dcedc8', // Light green background for the content box
                        padding: 2, // Padding for the content box
                    }}
                >
                    <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                        Our research in Hong Kong was focused on addressing the main research question outlined earlier.
                        Prior to arriving, we expected that the majority of our data would be gathered through a survey
                        distributed to local residents. However, after a few days, it became clear that collecting
                        substantial or conclusive data through the survey would be challenging. Many individuals were
                        hesitant to engage with QR codes or provide information online, even though our questions only
                        asked for basic details such as age and district number. Others were either too busy or simply
                        uninterested in participating. While we managed to collect just under 50 responses, the sample
                        size was neither large nor diverse enough to be considered conclusive for our analysis.
                    </Typography>

                    <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                        To summarize the rest of our data, however, we found that bees resided more in rural and
                        suburban locations than urban due to the increased number of flowers and other greenery.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                }}
            >
                <Grid container spacing={2} alignItems="stretch">

                    {/* Environmental Factors Section */}
                    <Grid size={{xs: 12, sm: 6}} display="flex" flexDirection="column">
                        {/* Title Box 1 */}
                        <Box
                            sx={{
                                padding: 2,
                                backgroundColor: '#f8c2d4',
                            }}
                        >
                            <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                                Environmental Factors
                            </Typography>
                        </Box>

                        {/* Content Box 1 */}
                        <Box
                            sx={{
                                padding: 2,
                                backgroundColor: '#ffe5ed',
                                flex: 1,
                            }}
                        >
                            <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                                The main environmental factors contributing to the decline of bee and other pollinator
                                populations in Hong Kong are the loss of habitat, food, and the increased use of
                                pesticides. Hong Kong is one of the most urbanized regions globally, and its
                                unsustainable rate of urban development has resulted in the fragmentation and loss of
                                natural habitats that are essential for pollinators as well as diminishing native plant
                                species <a
                                href="https://medium.com/@danielle.tsang88/the-fragile-ecosystems-of-hong-kong-falling-short-of-un-biodiversity-targets-37cdce942f6b#:~:text=1.,2"
                                target="_blank" rel="noopener noreferrer">[1]</a>. When we collected data we found most
                                flowers to be invasive species that strain the local ecosystem. This leads us to our
                                next environmental issue which is the lack of food for pollinators. Although there are
                                many green spaces in Hong Kong there is a stark lack of flowers. And even the available
                                water could be tainted with pesticides. Widespread application of pesticides in
                                agricultural practices and public spaces poses a significant threat because the
                                chemicals in them like neonicotinoids are toxic and not only directly affect the health
                                of pollinators but can also lead to sub-lethal effects that impair their foraging
                                behavior and navigation abilities. The accumulation of these chemicals in the
                                environment further compounds the stressors faced by pollinators, contributing to their
                                decline <a href="https://earth.org/climate-change-pollinators/" target="_blank"
                                           rel="noopener noreferrer">[2]</a>.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Social Factors Section */}
                    <Grid size={{xs: 12, sm: 6}} display="flex" flexDirection="column">
                        {/* Title Box 2 */}
                        <Box
                            sx={{
                                border: '0px solid #000',
                                padding: 2,
                                backgroundColor: '#f8c2d4',
                            }}
                        >
                            <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                                Social Factors
                            </Typography>
                        </Box>

                        {/* Content Box 2 */}
                        <Box
                            sx={{
                                border: '0px solid #000',
                                borderTop: '0',
                                padding: 2,
                                backgroundColor: '#ffe5ed',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                                People in general are very scared of all insects including bees in Hong Kong. Though, it
                                is clear that people recognize the importance of bees in our environment, as shown
                                through our surveys. There are also some cultural misconceptions around bees and wasps
                                that lead people to think that bees are the same as wasps.
                            </Typography>
                            {/* Image */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center', // Center the image horizontally
                                    alignItems: 'center', // Center the image vertically
                                    marginTop: 2, // Add spacing between text and image
                                }}
                            >
                                <img
                                    src={BeesWasps as string}
                                    alt="Bees and Wasps"
                                    style={{maxWidth: '100%', height: 'auto', borderRadius: 8}} // Adjust image styling
                                />
                            </Box>

                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box
                sx={{
                    border: '0px solid #000',
                    padding: 2,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'stretch',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',
                }}
            >
                <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                    How to Enhance Conservation Efforts
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                }}
            >
                <Grid container spacing={2} alignItems="stretch">

                    {/* First Section */}
                    <Grid size={{ xs: 12, sm: 6 }} display="flex" flexDirection="column">
                        {/* Title Box 1 */}
                        <Box
                            sx={{
                                border: '0px solid #000',
                                padding: 2,
                                backgroundColor: '#ffab91',
                            }}
                        >
                            <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                                For Law Enforcing Agencies
                            </Typography>
                        </Box>

                        {/* Content Box 1 */}
                        <Box
                            sx={{
                                padding: 2,
                                backgroundColor: '#ffccbc',
                                flex: 1, // Ensure the box takes full height of its parent
                            }}
                        >
                            <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                                The law enforcing agencies in Hong Kong that regulate the use of pesticides should weigh
                                in the negative impact of pesticides, especially those used for mosquitos on bees and their
                                populations in and around the city even though they are not the target of those pesticides.
                                These pesticides can harm bees and other beneficial insects in the process of keeping
                                mosquitos away. The plants used in parks for landscaping and decoration can also be
                                changed to improve the local biodiversity of the area. This can be through replacing foreign
                                oriental species of plants with those that are local to the area and also attract
                                pollinators. These steps can bring the cities throughout Hong Kong even closer to coexisting
                                with the natural landscape surrounding them, and in turn help improve the situation of bees
                                in the city.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Second Section */}
                    <Grid size={{ xs: 12, sm: 6 }} display="flex" flexDirection="column">
                        {/* Title Box 2 */}
                        <Box
                            sx={{
                                padding: 2,
                                backgroundColor: '#ffab91',
                            }}
                        >
                            <Typography color="black" variant="h4" fontFamily={"Bree Serif"}>
                                For the General Public
                            </Typography>
                        </Box>

                        {/* Content Box 2 */}
                        <Box
                            sx={{
                                padding: 2,
                                backgroundColor: '#ffccbc',
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography color="black" fontFamily={"Nunito Sans"} variant="h6">
                                Even if bees aren’t physically present in everyone's lives all the time, they impact our
                                lives indirectly with many products using beeswax and honey as well as bees being the main
                                pollinators of many crops for foods that we eat. This is why we must be mindful of our
                                interactions with bees. In the case that there is a bee hive or swarm of bees, it's okay
                                to be scared or frightened. The main choice we need to make, however, is to keep the bees
                                safe from pesticides and prevent anyone from killing them because of fear. This is the only
                                way we can coexist and have a future that is sustainable.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{overflow: 'hidden'}}>
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
                    <Typography color="black" variant="h4" fontFamily={"Bree Serif"} sx={{mb: 2}}>
                        Explore More About Conservation Efforts in Hong Kong
                    </Typography>
                </Box>
            </Box>

            {/* Image Grid */}
            <Box sx={{flexGrow: 1, padding: 4}}>
                <Grid container spacing={3}>
                    {images.map((image, index) => (
                        <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    height: 400,
                                    '&:hover .description': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {/* Clickable Image */}
                                <a href={image.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={image.src as string}
                                        alt={image.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }} // Fixed height and cover
                                    />
                                </a>

                                {/* Title Overlay */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        left: 16,
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '8px 16px',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Typography variant="h6" fontFamily={"Bree Serif"}>{image.title}</Typography>
                                </Box>

                                {/* Hover Description */}
                                <Box
                                    className="description"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '16px',
                                        opacity: 0, // Hidden by default
                                        transition: 'opacity 0.3s ease', // Smooth transition
                                    }}
                                >
                                    <Typography variant="h6" fontSize={"1rem"}  fontFamily={"Nunito Sans"}>{image.description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}