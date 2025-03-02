import { Box, Container, Typography, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffe468",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                position: "absolute",
                left: 0,
                right: 0,
                zIndex: -1,
                marginTop: "2rem",
            }}
        >
            <Container maxWidth="xl">
                <Grid container direction="column" alignItems="center">
                    <Grid size={{xs:12}}>
                        <Typography color="black" variant="h5" align="center" gutterBottom>
                            This research is conducted by students at Worcester Polytechnic Institute for completion of their Interactive Qualifying Project (IQP) and is not peer reviewed.
                        </Typography>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <Typography color="black" variant="body1" align="center" gutterBottom>
                            © 2025 WPI. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <Typography color="black" variant="body1" align="center">
                            <Link href="https://www.beetales.com.hk/" color="inherit" underline="always" target="_blank" rel="noopener">
                                Beetales
                            </Link>
                            {" | "}
                            <Link href="https://www.wpi.edu" color="inherit" underline="always" target="_blank" rel="noopener">
                                Worcester Polytechnic Institute (WPI)
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
