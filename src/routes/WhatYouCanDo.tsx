import {Box, Grid, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        <Stack spacing={2} sx={{paddingX: 2}}>
            {/* Full-width Box 1 */}
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#C20F2E',
                    width: '100%', // Full width
                }}>
                <Typography color='black' variant='h4'>
                    Full Width Box 1
                </Typography>
            </Box>

            {/* Two Boxes on the Same Line */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 1 Title</Typography>
                        <Typography color='white'>Content for the first box.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 2 Title</Typography>
                        <Typography color='white'>Content for the second box.</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Full-width Box 2 */}
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#C20F2E',
                    width: '100%', // Full width
                }}>
                <Typography color='black' variant='h4'>
                    Full Width Box 2
                </Typography>
            </Box>

            {/* Two Boxes on the Same Line Again */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 3 Title</Typography>
                        <Typography color='white'>Content for the third box.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 4 Title</Typography>
                        <Typography color='white'>Content for the fourth box.</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Two Images on the Same Line */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        component="img"
                        src="https://via.placeholder.com/300"
                        alt="Placeholder 1"
                        sx={{ width: '100%', borderRadius: 1 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        component="img"
                        src="https://via.placeholder.com/300"
                        alt="Placeholder 2"
                        sx={{ width: '100%', borderRadius: 1 }}
                    />
                </Grid>
            </Grid>

            {/* Two Boxes Below the Images */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 5 Title</Typography>
                        <Typography color='white'>Content for the fifth box.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#292828',
                        }}>
                        <Typography color='white' variant='h6'>Box 6 Title</Typography>
                        <Typography color='white'>Content for the sixth box.</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Long Rectangular Box and Stacked Boxes */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            border: '1px solid #000',
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#C20F2E',
                            height: '100%', // Adjust height as needed
                        }}>
                        <Typography color='black' variant='h6'>Long Rectangle Title</Typography>
                        <Typography color='black'>Content for the long rectangle box.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 2,
                                    borderRadius: 1,
                                    backgroundColor: '#292828',
                                }}>
                                <Typography color='white' variant='h6'>Stacked Box 1 Title</Typography>
                                <Typography color='white'>Content for the first stacked box.</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    border: '1px solid #000',
                                    padding: 2,
                                    borderRadius: 1,
                                    backgroundColor: '#292828',
                                }}>
                                <Typography color='white' variant='h6'>Stacked Box 2 Title</Typography>
                                <Typography color='white'>Content for the second stacked box.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
}