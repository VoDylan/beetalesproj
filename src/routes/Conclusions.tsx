import { Box, Grid, Stack, Typography } from "@mui/material";

export default function ConclusionPage() {
    return (
        <Stack spacing={2} sx={{ paddingX: 2, marginTop: "5rem" }}>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,

                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#c5e1a5',

                }}>
                <Typography color='black' variant='h4'>
                    Which key environmental and social factors influence pollinator
                    populations across urban, suburban, and rural areas of Hong Kong,
                    and how can conservation efforts be enhanced for greater effectiveness?
                </Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#dcedc8',
            }}>
                <Typography color='black'>
                    Our research in Hong Kong was focused on addressing the main research
                    question outlined earlier. Prior to arriving, we expected that the majority
                    of our data would be gathered through a survey distributed to local residents.
                    However, after a few days, it became clear that collecting substantial or
                    conclusive data through the survey would be challenging. Many individuals were
                    hesitant to engage with QR codes or provide information online, even though
                    our questions only asked for basic details such as age and district number.
                    Others were either too busy or simply uninterested in participating. While
                    we managed to collect just under 50 responses, the sample size was neither
                    large nor diverse enough to be considered conclusive for our analysis.
                </Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#dcedc8',
            }}>
                <Typography color='black'> To summerize the rest of our data however we found that bees resided more in rural and suburban locations than urban due to the increased number of flowers and other greenery. </Typography>
            </Box>
            <Grid container spacing={2}>
                {/* Title Box 1 */}
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 0,
                            backgroundColor: '#FAE4B3',
                        }}>
                        <Typography color='black' variant='h4'>
                            Environmental Factors
                        </Typography>
                    </Box>
                </Grid>

                {/* Title Box 2 */}
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 0,
                            backgroundColor: '#FAE4B3',
                        }}>
                        <Typography color='black' variant='h4'>
                            Social Factors
                        </Typography>
                    </Box>
                </Grid>

                {/* Content Box 1 */}
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: "1rem",
                            backgroundColor: '#F7CE46',
                        }}>
                        <Typography color='black'>
                            The main environmental factors contributing to the decline of bee and other pollinator populations in Hong Kong are the loss of habitat, food, and the increased use of pesticides. Hong Kong is one of the most urbanized regions globally, and its unsustainable rate of urban development has resulted in the fragmentation and loss of natural habitats that are essential for pollinators as well as diminishing native plant species <a href="https://medium.com/@danielle.tsang88/the-fragile-ecosystems-of-hong-kong-falling-short-of-un-biodiversity-targets-37cdce942f6b#:~:text=1.,2" target="_blank" rel="noopener noreferrer">[1]</a>. When we collected data we found most flowers to be invasive species that strain the local ecosystem. This leads us to our next environmental issue which is the lack of food for pollinators. Although there are many green spaces in Hong Kong there is a stark lack of flowers. And even the avaiable water could be tainted wuth pesticides. Widespread application of pesticides in agricultural practices and public spaces poses a significant threat because the chemicals in them like neonicotinoids are toxic and not only directly affect the health of pollinators but can also lead to sub-lethal effects that impair their foraging behavior and navigation abilities. The accumulation of these chemicals in the environment further compounds the stressors faced by pollinators, contributing to their decline <a href="https://earth.org/climate-change-pollinators/" target="_blank" rel="noopener noreferrer">[2]</a>.

                        </Typography>
                    </Box>
                </Grid>

                {/* Content Box 2 */}
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: "1rem",
                            backgroundColor: '#F7CE46',
                        }}>
                        <Typography color='black'>
                            People in general are very scared of all insects including bees in Hong Kong. There are also some cultural misconceptions around bees and wasps and people tend to think that bees are the same as wasps.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: "0",
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: '100%',
                    marginX: 'auto',
                    backgroundColor: '#f9d6b7'
                }}>
                <Typography color='black' variant='h4'> How to Enhance Conservation Efforts</Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#F7CE46'
                }}>
                <Typography color="black"> For the Law Enforcing Agencies of Hong Kong</Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: '100%',
                    marginX: 'auto',
                    backgroundColor: '#F7CE46'
                }}>
                <Typography> The law enforcing agencies in hong kong that regulate the use of pesticides and decide what should be planted in government areas include but are not limited to...</Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#F7CE46'
                }}>
                <Typography color="black"> For Everyone Else Looking to Make Difference</Typography>
            </Box>
            <Box
                sx = {{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: '100%',
                    marginX: 'auto',
                    backgroundColor: '#F7CE46'
                }}>
                <Typography> Support the Local organizations around you looking to restore the pollinator populations like our Sponsor Beetales.</Typography>
            </Box>
            {/* Carousel Section for other organizations to check out */}
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 0,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: '100%',
                    marginX: 'auto',
                    backgroundColor: '#f9d6b7',
                }}
            >
                <Typography color="black" variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                    Explore More About Conservation Efforts
                </Typography>
            </Box>
        </Stack>
    );
}