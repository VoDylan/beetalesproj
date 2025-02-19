import { Box, Stack, Typography } from "@mui/material";

export default function ConclusionPage() {
    return (
        <Stack spacing={2} sx={{ paddingX: 2 }}>
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#C20F2E',
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
                    borderRadius: 1,
                    marginBottom: 2,
                    maxWidth: '100%',
                    width: 'fit-content',
                    marginX: 'auto',
                    backgroundColor: '#292828',
            }}>
                <Typography color='white'>
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
        </Stack>
    );
}