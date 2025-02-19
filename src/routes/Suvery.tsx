import { Box, Stack, Typography } from "@mui/material";

export default function SurveyPage() {
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
                    Purpose of the Survey
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
        </Stack>
    );
}